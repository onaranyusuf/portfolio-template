<template>
  <div class="contact-container">
    <h1 class="header">
      {{ t("contact.header") }}
    </h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group font-mono">
        <input
          id="name"
          v-model="form.name"
          type="text"
          :placeholder="t('contact.name')"
          :aria-label="t('contact.name')"
          required
        />
      </div>

      <div class="form-group font-mono">
        <input
          id="email"
          v-model="form.email"
          type="email"
          :placeholder="t('contact.email')"
          :aria-label="t('contact.email')"
          required
        />
      </div>

      <div class="form-group font-mono">
        <textarea
          id="message"
          v-model="form.message"
          :placeholder="t('contact.message')"
          :aria-label="t('contact.message')"
          :maxlength="maxMessageLength"
          rows="5"
          required
        />
        <div class="flex justify-between -mt-1.5">
          <span class="text-gray-500 text-xs ml-1 justify-end flex">
            {{ remainingCharacters }}
          </span>
          <div
            v-if="errorMessage || successMessage"
            :class="
              errorMessage
                ? 'text-red-500 dark:text-red-600'
                : 'text-green-500 dark:text-green-800'
            "
            class="text-xs font-mono mr-1"
          >
            <p v-if="errorMessage">
              {{ errorMessage }}
            </p>
            <p v-if="successMessage">
              {{ successMessage }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button type="submit">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>{{ t("contact.send") }}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const formcarryUrl = import.meta.env.VITE_FORMCARRY_URL;

const form = reactive<Record<string, string>>({
  name: "",
  email: "",
  message: "",
});

const errorMessage = ref("");
const successMessage = ref("");

const maxMessageLength = 500;
const remainingCharacters = computed(() => {
  const remaining = maxMessageLength - (form.message?.length || 0);
  return `${remaining}`;
});

const resetForm = () => {
  Object.keys(form).forEach((key) => (form[key] = ""));
};

const submitForm = async () => {
  try {
    const response = await fetch(formcarryUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (data.code === 200) {
      successMessage.value = t("contact.success");
      resetForm();
    } else {
      errorMessage.value = t("contact.error");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
@reference "~/assets/css/main.css";

.contact-container {
  @apply max-w-lg mx-auto px-6 bg-transparent;
}

.header {
  @apply text-base font-light text-center text-gray-800 dark:text-gray-700 mb-4;
}

.contact-form {
  @apply space-y-4 bg-transparent;
}

.form-group {
  @apply flex flex-col space-y-2;
}

label {
  @apply text-sm font-medium text-gray-700;
}

input,
textarea {
  @apply w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white/30 dark:bg-white/20;
}

input::placeholder,
textarea::placeholder {
  @apply text-base font-medium text-gray-500;
}

/* 🎯 Özel buton stili */
button {
  font-family: inherit;
  font-size: 16px;
  background: linear-gradient(to bottom right, #ecf39f, #da6a6a);
  color: white;
  padding: 0.6em 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

html.dark button {
  background: linear-gradient(
    to bottom right,
    #b573e4,
    #377bce
  ); /* Dark mode */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
}

button:active {
  transform: scale(0.96);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

button span {
  display: block;
  margin-left: 0.4em;
  transition: all 0.3s;
}

button svg {
  width: 18px;
  height: 18px;
  fill: white;
  transition: all 0.3s;
}

button .svg-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  margin-right: 0.5em;
  transition: all 0.3s;
}

button:hover .svg-wrapper {
  background-color: rgba(175, 150, 150, 0.3);
}

button:hover svg {
  transform: rotate(45deg);
}
</style>

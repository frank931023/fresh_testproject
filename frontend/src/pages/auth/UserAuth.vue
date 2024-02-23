<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control" v-if="this.mode !== 'login'">
        <label for="name">Name</label>
        <input type="name" id="name" v-model.trim="name" />
      </div>
      <div class="form-control" v-if="this.mode !== 'login'">
        <label for="phone">Phone</label>
        <input type="phone" id="phone" v-model.trim="phone" />
      </div>
      <div class="form-control" v-if="this.mode !== 'login'">
        <label for="birthday">Birthday (YYYY/MM/DD)</label>
        <input type="birthday" id="birthday" v-model.trim="birthday" />
      </div>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!formIsValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">
        {{ switchModeButtonCaption }}
      </base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      password: "",
      birthday: "",
      formIsValid: true,
      mode: "login",
      //   isLoading: false,
      //   error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup instead";
      } else {
        return "Login instead";
      }
    },
  },
  methods: {
    submitForm() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 ||
        this.name === "" ||
        this.phone === "" ||
        this.birthday === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.formIsValid = true;
      //   this.$emit("submit", {
      //     email: this.email,
      //     password: this.password,
      //   });
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>


<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
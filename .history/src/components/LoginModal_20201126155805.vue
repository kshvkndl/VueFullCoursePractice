<template>
  <div v-if="isLoginOpen">
    <section
      @click="closeModal"
      class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-10"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow-md w-1/3">
          <div class="p-2 border rounded">
            <h1 class="text-center text-xl">Login Form</h1>
            <GoogleLogin @close-modal-from-google="closeModal"></GoogleLogin>

            <form class="p-2 m-2" @submit.prevent="submitLogin">
              <div class="my-4">
                <label for="">Email or Username</label>
                <input
                  type="text"
                  class="rounded shadow p-2 w-full"
                  v-model="loginForm.email"
                  placeholder="Enter Your Email or User Name"
                  ref="emailRef"
                />
              </div>
              <div class="my-4">
                <label for="">Password</label>
                <input
                  type="Password"
                  class="rounded shadow p-2 w-full"
                  v-model="loginForm.password"
                  placeholder="Enter Your Password"
                  ref="passwordRef"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                >
                  <span v-if="isLoading"> <b>...</b> </span>
                  <span v-else>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/utilities/firebase";
import GoogleLogin from "@/components/login/GoogleLogin";

export default {
  components: { GoogleLogin },

  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
  data() {
    return {
      loginForm: {
        email: "admin@admin.com",
        password: "admin@123",
      },
      isLoading: false,
    };
  },

  mounted() {
    this.$refs.emailRef.focus();
  },

  methods: {
    submitLogin() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(() => {
          this.isLoading = false;
          this.loginForm.email = "";
          this.loginForm.password = "";
          this.closeModal();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    closeModal() {
      this.$emit("close-login-modal");
    },
  },
};
</script>
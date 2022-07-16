<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Authentication from "@/services/Authentication";

export default {
  name: "RegisterView",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      await Authentication.register({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
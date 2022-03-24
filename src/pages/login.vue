<template>
  <!-- pc -->
  <div
    class="desktop-only"
    style="background-color: #f6f7fb; width: 100%; height: 100vh; margin: auto"
  >
    <div class="loginBox shadow-7 absolute-center" align="center">
      <img
        class="q-pt-md"
        src="~assets/log_in_picture/giraffe.png"
        alt="giraff"
        style="width: 158px height: 158px"
      />

      <div class="inputBar col">
        <q-input outlined v-model="username" label="Username" />
      </div>

      <div class="inputBar q-pt-md">
        <q-input
          outlined
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div class="row">
        <div class="col-3"></div>
        <div class="col q-pt-xl">
          <q-btn
            @click="goToMian()"
            class="signinBtn"
            unelevated
            color="primary"
            label="Sign in"
          />
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      username: "",
      password: "",
      isPwd: true,
    };
  },
  methods: {
    goToMian() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBox {
  width: 600px;
  height: 464px;
  border: 1px;
  border-radius: 30px;
  margin: auto;
}
.inputBar {
  width: 330px;
  height: 55px;
}
.brx {
  border: 1px solid red;
}
.rowGap {
  height: 100px;
}
.signinBtn {
  width: 120px;
  height: 45px;
}
</style>

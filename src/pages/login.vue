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
        <q-input outlined v-model="input.username" label="Username" />
      </div>

      <div class="inputBar q-pt-md">
        <q-input outlined v-model="input.password" label="Password" />
      </div>

      <div class="row">
        <div class="col-3"></div>
        <div class="col q-pt-xl">
          <q-btn class="signinBtn" unelevated color="primary" label="Sign in" />
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
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

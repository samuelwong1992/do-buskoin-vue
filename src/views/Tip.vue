<template>
  <div class="tip">
    <div class="scanner-container">
      <QrcodeStream @decode="onDecode"></QrcodeStream>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "Tip",
  data: function () {
    return {
      qr_code: "",
    };
  },
  components: {
    QrcodeStream,
  },
  methods: {
    onDecode(decodedString) {
      if(decodedString.includes(this.$api_hostname+"tip/")) {
        this.window.href = decodedString;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tip {
  display: flex;
}
.scanner-container {
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  
}
</style>

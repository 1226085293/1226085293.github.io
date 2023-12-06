<script setup lang="ts">
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import NormalPage from "@theme-hope/components/NormalPage";
import SkipLink from "@theme-hope/components/SkipLink";
import FadeSlideY from "@theme-hope/components/transitions/FadeSlideY";
</script>

<template>
  <SkipLink />
  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentAfter>
          <div class="slot-content-after">
            <h3>📣 觉得很赞？分享给你的朋友吧！</h3>
            <Share services="qq,qrcode" colorful />
          </div>
        </template>
      </NormalPage>
    </FadeSlideY>
  </CommonWrapper>
</template>

<style>
.slot-content-after {
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  max-width: 780px;
}
</style>

<template>
  <div class="item">
    <div class="item-img">
      <img :src="item.avatar_url" alt="">
    </div>
    <div class="item-desc">
      <span class="item-desc-login"><strong>{{ item.login }}</strong></span>
      <a :href="'https://github.com/' + item.login" target="_blank" class="item-desc-profile">Профиль пользователя</a>
      <span class="item-desc-score">Scores: {{ item.score }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/config.scss';

.item {
  @include Flex;
  width: 30%;
  margin: 0 1%;

  &-img {
    width: 40%;
    margin-right: 20px;

    img {
      width: 100%;
    }
  }

  &-desc {
    @include Flex(flex-start, flex-start, column);

    & > * {
      padding-bottom: 10px;
      font-size: 18px;
    }

    &-profile {
      color: $red;
      text-decoration: underline;
    }
  }
}
</style>

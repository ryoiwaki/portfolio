<template>
  <layout-wrapper>
    <layout-visual
      title="JAMSTAC SITE DEMO"
      message="microCMSを利用して架空のお知らせやメニューを表示しています。"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading>Demo Cafeのおすすめメニュー<br>（架空の商品になります）</base-heading>
      <div class="flex md:flex-wrap justify-between mb-20 md:mb-0">
        <layout-menu-list
          v-for="(item, index) in menuItems"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :name="item.name"
          :body="item.body"
          :price="item.price"
          item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
          block-class="max-w"
          image-class="w-full"
          data-class="px-6 py-4"
          :flag-body="false"
        />
      </div>
      <base-button name="メニューの一覧" link="/menu" />
      <base-heading>Demo Cafeのお知らせ</base-heading>
      <div class="mb-20">
        <layout-information-list
          v-for="(item, index) in infoItems"
          :id="item.id"
          :key="index"
          :date="item.date"
          :title="item.title"
        />
      </div>
      <base-button name="お知らせの一覧" link="/information" />
    </div>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config }) {
    const menu = await axios.get(
      `${$config.apiUrl}/menu?limit=3&filters=flag[equals]true`,
      {
        headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
      }
    )
    const info = await axios.get(`${$config.apiUrl}/information?limit=3`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    return {
      menuItems: menu.data.contents,
      infoItems: info.data.contents,
    }
  },
}
</script>
<style>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
</style>

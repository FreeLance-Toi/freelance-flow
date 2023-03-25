<template>
  <header ref="header" class="header">
    <div class="header__brand">
      <svg class="header__brand--logo" viewBox="0 0 27 28" fill="none"><path d="M22.3138 15.7275L22.3138 0.5L17.2976 0.5L17.2976 15.7275L12.792 15.7275V19.2373L17.4617 19.2373V20.3341C17.4617 20.9922 17.3888 21.5406 17.2428 21.9794C17.0969 22.4303 16.8841 22.7837 16.6044 23.0396C16.3247 23.3077 15.9842 23.4966 15.5829 23.6063C15.1694 23.716 14.7073 23.7708 14.1966 23.7708C13.8318 23.7708 13.5034 23.8257 13.2116 23.9353C12.9076 24.0572 12.7434 24.307 12.7191 24.6848L12.6096 27.171C13.0109 27.2806 13.4122 27.3598 13.8135 27.4086C14.2027 27.4695 14.6161 27.5 15.0539 27.5C16.1849 27.5 17.2003 27.3355 18.1002 27.0064C19.0001 26.6774 19.7601 26.2082 20.3803 25.5988C21.0005 25.0017 21.4808 24.2644 21.8213 23.3869C22.1497 22.5217 22.3138 21.5528 22.3138 20.4804V19.2373H25.05V17.2265C25.05 16.8609 24.9345 16.5806 24.7034 16.3856C24.4602 16.1906 24.1501 16.0565 23.7731 15.9834L22.3138 15.7275Z" fill="currentColor"/><path d="M4.68615 12.2725V27.5H9.70243V12.2725H14.208V8.7627H9.53826V7.66588C9.53826 7.00779 9.61122 6.45938 9.75715 6.02065C9.90308 5.56974 10.1159 5.21632 10.3956 4.96039C10.6753 4.69228 11.0158 4.50339 11.4171 4.39371C11.8305 4.28402 12.2927 4.22918 12.8034 4.22918C13.1682 4.22918 13.4966 4.17434 13.7884 4.06466C14.0924 3.94279 14.2566 3.69296 14.2809 3.31517L14.3904 0.829047C13.9891 0.719366 13.5878 0.640151 13.1865 0.591403C12.7973 0.530469 12.3839 0.500002 11.9461 0.500002C10.8151 0.500002 9.79972 0.664525 8.89983 0.993571C7.99994 1.32262 7.23989 1.79181 6.6197 2.40115C5.9995 2.99831 5.51916 3.73561 5.17866 4.61307C4.85032 5.47834 4.68615 6.44719 4.68615 7.51964V8.7627H1.95V10.7735C1.95 11.1391 2.06552 11.4194 2.29658 11.6144C2.53979 11.8094 2.84989 11.9435 3.22687 12.0166L4.68615 12.2725Z" fill="currentColor"/></svg>
      <h1 class="header__brand--name">Freelance Flow</h1>
    </div>
  
    <nav class="header__menu">
      <div class="header__menu__dpd">
        <RouterLink to="/" class="header__menu__element header__menu__dpd--title">
          <span>Nos outils</span>
          <svg class="header__menu__dpd--title--icon" viewBox="0 0 18 18" fill="none"><path d="M6.9975 4.5H11.0025C13.4925 4.5 14.505 6.2625 13.2675 8.415L12.7125 9.375C12.5775 9.6075 12.33 9.75 12.06 9.75H5.94C5.67 9.75 5.4225 9.6075 5.2875 9.375L4.7325 8.415C3.495 6.2625 4.5075 4.5 6.9975 4.5ZM6.594 10.5H11.4165C11.709 10.5 11.889 10.815 11.739 11.0625L11.259 11.8875C10.0215 14.04 7.9815 14.04 6.744 11.8875L6.26401 11.0625C6.12151 10.815 6.3015 10.5 6.594 10.5Z" fill="currentColor"/></svg>
        </RouterLink>
  
        <div class="header__menu__dpd__content">
          <RouterLink to="/" class="header__menu__dpd__content--link">Générateur de devis</RouterLink>
        </div>
      </div>
      <div class="header__menu__dpd">
        <RouterLink to="/" class="header__menu__element header__menu__dpd--title">
          <span>À propos</span>
          <svg class="header__menu__dpd--title--icon" viewBox="0 0 18 18" fill="none"><path d="M6.9975 4.5H11.0025C13.4925 4.5 14.505 6.2625 13.2675 8.415L12.7125 9.375C12.5775 9.6075 12.33 9.75 12.06 9.75H5.94C5.67 9.75 5.4225 9.6075 5.2875 9.375L4.7325 8.415C3.495 6.2625 4.5075 4.5 6.9975 4.5ZM6.594 10.5H11.4165C11.709 10.5 11.889 10.815 11.739 11.0625L11.259 11.8875C10.0215 14.04 7.9815 14.04 6.744 11.8875L6.26401 11.0625C6.12151 10.815 6.3015 10.5 6.594 10.5Z" fill="currentColor"/></svg>
        </RouterLink>
        
        <div class="header__menu__dpd__content">
          <RouterLink to="/" class="header__menu__dpd__content--link">Qui sommes-nous ?</RouterLink>
        </div>
      </div>
      <RouterLink to="/" class="header__menu__element header__menu__link">Contact</RouterLink>
    </nav>
  </header>
  
  <main class="page">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  mounted () {
    window.onscroll = this.headerTransform
  },
  methods: {
    headerTransform () {
      if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) (this.$refs.header as HTMLElement).classList.add('scrolled')
      else (this.$refs.header as HTMLElement).classList.remove('scrolled')
    }
  }
})
</script>

<style lang="sass">
@use "assets/css/book"
@forward "assets/css/fonts"
@forward "assets/css/normalize"
@forward "assets/css/masters/header"

body
  font-size: 18px
  font-family: book.$font-body

#app
  width: 100%
  min-height: 100vh

.page
  width: 100%
</style>

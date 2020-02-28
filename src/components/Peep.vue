<template>
    <svg width="100%" height="100%" viewBox="0 0 1136 1533" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M0 0H1136V1533H0V0Z" fill="white"/>
      <component :is="body"/>
      <component :is="head"/>
      <component :is="face"/>
      <component :is="facialHair"/>
      <component :is="accessories"/>
    </svg>
</template>
<script>
export default {
  name: 'Peep',
  props: {
    head: {
      type: String,
      default () {
        return 'HeadBunv2'
      }
    },
    body: {
      type: String,
      default () {
        return 'BodyWhatever'
      }
    },
    face: {
      type: String,
      default () {
        return 'FaceSmile'
      }
    },
    accessories: {
      type: String
    },
    facialHair: {
      type: String
    }
  }
}
</script>

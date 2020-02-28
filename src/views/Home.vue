<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-transparent mt-0 mb-0 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h1 class="text-center title"><i>Open Peeps</i> <span style="font-family: 'Ubuntu'; font-weight:normal;">generator</span></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="peep-img-container d-flex">
              <Peep
                :accessories="accessory"
                :body="body"
                :head="head"
                :facial-hair="facial"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <b-form-group label="Accessories" label-cols-sm="4"
                          label-cols-lg="3">
              <b-form-select v-model="accessory" :options="accessoryOptions" label-field="Head"/>
            </b-form-group>
            <b-form-group label="Body" label-cols-sm="4"
                          label-cols-lg="3">
              <b-form-select v-model="body" :options="bodyOptions" label-field="Head"/>
            </b-form-group>
            <b-form-group label="Head" label-cols-sm="4"
                          label-cols-lg="3">
              <b-form-select v-model="head" :options="headOptions" label-field="Head"/>
            </b-form-group>
            <b-form-group label="Facial hair" label-cols-sm="4"
                          label-cols-lg="3">
              <b-form-select v-model="facial" :options="facialOptions" label-field="Head"/>
            </b-form-group>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-4 pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <p class="mb-2">Illustration design  by <a href="https://www.pablostanley.com/" target="_blank">Pablo Stanley.</a></p>
            <p class="mb-2">Developed by <a href="https://helloefficiency.com" target="_blank">Hello Efficiency</a></p>
            <p>Sketch library can be found at <a href="https://openpeeps.com" target="_blank">openpeeps.com</a> </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Home',
  data () {
    return {
      body: 'BodyTee1',
      head: 'HeadAfro',
      accessory: null,
      facial: null
    }
  },
  computed: {
    accessoryOptions () {
      const options = [
        {
          value: null,
          text: 'None'
        }
      ]
      return [
        ...options,
        ...Object.keys(Vue.options.components).filter((item) => {
          return item.startsWith('Accessory')
        }).map((item) => {
          return {
            value: item,
            text: item
          }
        })]
    },
    bodyOptions () {
      return Object.keys(Vue.options.components).filter((item) => {
        return item.startsWith('Body')
      }).map((item) => {
        return {
          value: item,
          text: item
        }
      })
    },
    facialOptions () {
      const options = [
        {
          value: null,
          text: 'None'
        }
      ]
      return [
        ...options,
        ...Object.keys(Vue.options.components).filter((item) => {
          return item.startsWith('Facial')
        }).map((item) => {
          return {
            value: item,
            text: item
          }
        })
      ]
    },
    headOptions () {
      return Object.keys(Vue.options.components).filter((item) => {
        return item.startsWith('Head')
      }).map((item) => {
        return {
          value: item,
          text: item
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .peep-img-container {
    max-height: 500px;

    svg {
      max-height: 500px;
    }
  }

  .title {
    font-family: 'Playfair Display';
    font-weight: 900;
  }

  footer {
    font-size: 13px;
  }
</style>

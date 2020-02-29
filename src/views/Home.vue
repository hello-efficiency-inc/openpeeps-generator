<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-transparent mt-0 mb-0 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h1 class="text-center title">
              <i>Open Peeps</i>
              <span class="ml-3 alt-text">generator</span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="peep-img-container d-flex">
              <Peep ref="peep" :accessories="accessory" :body="body" :head="head" :facial-hair="facial" :face="face" />
              <canvas class="d-none" width="600" height="600" ref="canvas"></canvas>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <b-form-group label="Accessories" label-cols-sm="4" label-cols-lg="3">
              <b-form-select v-model="accessory" :options="accessoryOptions" label-field="Head" />
            </b-form-group>
            <b-form-group label="Body" label-cols-sm="4" label-cols-lg="3">
              <b-form-select v-model="body" :options="bodyOptions" label-field="Head" />
            </b-form-group>
            <b-form-group label="Head" label-cols-sm="4" label-cols-lg="3">
              <b-form-select v-model="head" :options="headOptions" label-field="Head" />
            </b-form-group>
            <b-form-group label="Face" label-cols-sm="4" label-cols-lg="3">
              <b-form-select v-model="face" :options="faceOptions" label-field="Head" />
            </b-form-group>
            <b-form-group label="Facial hair" label-cols-sm="4" label-cols-lg="3">
              <b-form-select v-model="facial" :options="facialOptions" label-field="Head" />
            </b-form-group>
            <b-form-group>
              <button type="button" class="btn btn-block btn-black" @click="generateRandom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
                Random
              </button>
            </b-form-group>
            <b-form-group>
              <button type="button" class="btn btn-block btn-black" @click="saveAsPng">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Png
              </button>
            </b-form-group>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-4 pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <p class="mb-2">
              Illustration design by
              <a
                href="https://www.pablostanley.com/"
                target="_blank"
              >Pablo Stanley.</a>
            </p>
            <p class="mb-2">
              Developed by
              <a href="https://helloefficiency.com" target="_blank">Hello Efficiency</a>
            </p>
            <p class="mb-5">
              Sketch library can be found at
              <a
                href="https://openpeeps.com"
                target="_blank"
              >openpeeps.com</a>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <a href="https://github.com/hello-efficiency-inc/openpeeps-generator" target="_blank">Github repo</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue'
import Canvg from 'canvg'

export default {
  name: 'Home',
  data () {
    return {
      body: 'BodyTee1',
      head: 'HeadAfro',
      face: 'FaceSmile',
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
        ...Object.keys(Vue.options.components)
          .filter(item => {
            return item.startsWith('Accessory')
          })
          .map(item => {
            return {
              value: item,
              text: item
            }
          })
      ]
    },
    bodyOptions () {
      return Object.keys(Vue.options.components)
        .filter(item => {
          return item.startsWith('Body')
        })
        .map(item => {
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
        ...Object.keys(Vue.options.components)
          .filter(item => {
            return item.startsWith('Facial')
          })
          .map(item => {
            return {
              value: item,
              text: item
            }
          })
      ]
    },
    headOptions () {
      return Object.keys(Vue.options.components)
        .filter(item => {
          return item.startsWith('Head')
        })
        .map(item => {
          return {
            value: item,
            text: item
          }
        })
    },
    faceOptions () {
      return Object.keys(Vue.options.components)
        .filter(item => {
          return item.startsWith('Face')
        })
        .map(item => {
          return {
            value: item,
            text: item
          }
        })
    }
  },
  methods: {
    generateRandom () {
      this.head = this.headOptions[Math.floor(Math.random() * this.headOptions.length)].value
      this.body = this.bodyOptions[Math.floor(Math.random() * this.bodyOptions.length)].value
      this.accessory = this.accessoryOptions[Math.floor(Math.random() * this.accessoryOptions.length)].value
      this.facial = this.facialOptions[Math.floor(Math.random() * this.facialOptions.length)].value
      this.face = this.faceOptions[Math.floor(Math.random() * this.faceOptions.length)].value
    },
    async saveAsPng () {
      const html = this.$refs.peep.$el.outerHTML
      var context = this.$refs.canvas.getContext('2d')
      var v = await Canvg.from(context, html)
      v.render()
      this.$refs.canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'getpeeps.png')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, 'image/png')
    }
  }
}
</script>
<style lang="scss" scoped>
.peep-img-container {
  max-height: 500px;

  svg {
    max-height: 500px;
  }
}

.btn-black {
  background: #000;
  color: #fff;
  border-color: #000;
  font-weight: 600;
  text-transform: uppercase;
  outline: none;

  &:hover {
    color: #fff;
  }
}

.title {
  font-family: "Playfair Display";
  font-weight: 900;
}

.alt-text {
  font-family: "Ubuntu";
  font-weight: normal;
}

footer {
  font-size: 13px;
}
</style>

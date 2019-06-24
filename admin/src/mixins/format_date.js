export default {
  methods: {
    fillNum (num) {
      return num > 9 ? num : `0${num}`
    },
    formatDate (str, type = '.') {
      const date = new Date(str)
      return `${date.getFullYear()}${type}${this.fillNum(date.getMonth() + 1)}${type}${this.fillNum(date.getDate())}`
    }
  }
}

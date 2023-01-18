export default {
  name (value) {
    const regex = /^[A-Za-z-\u4e00-\u9fa5]+$/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return 'wrong format: 請輸入中英文'
    return true
  },
  phone (value) {
    const regex = /^\d{4}[\\-]\d{3}[\\-]\d{3}/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return 'wrong format: 請輸入完整的電話號碼'
    return true
  },
  amount (value) {
    if (!value) return 'required 必填'
    if (!(value >= 0)) return 'wrong format: 金額不可低於零'
    return true
  }
}

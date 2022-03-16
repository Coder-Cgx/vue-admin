class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
  }
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  deleteCache() {}
  clearCache() {
    window.localStorage.clear()
  }
}

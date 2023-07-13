// 用于跳转的方法
const goToLink = (path: string) => {
    window.location.href = `${window.location.origin}${path}`
}

export {goToLink}
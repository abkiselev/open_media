const tabsButtons = document.querySelectorAll('.tabs__tab')
const tabsContent = document.querySelectorAll('.tabs-content')

tabsButtons.forEach((button) => {
  button.addEventListener('click', setTabContentVisible)
})

function setTabContentVisible() {
  tabsButtons.forEach((button) => {
    button.classList.toggle('tabs__tab_active')
  })

  tabsContent.forEach((block) => {
    block.classList.toggle('tabs-content_active')
  })
}

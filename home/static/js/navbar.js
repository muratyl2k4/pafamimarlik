const onScroll = () => {

    const scroll = document.documentElement.scrollTop

    if (scroll > 10) {
    header.classList.add('shrink');
    header_logo.classList.add('shrinklogo');
} else {
    header.classList.remove('shrink');
    header_logo.classList.remove('shrinklogo');
    }
}
window.addEventListener('scroll', onScroll);
  
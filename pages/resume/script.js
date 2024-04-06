function openInNewTab(url) {
    var win = window.open("/pages/portal?arg1="+url, '_blank');
    win.focus();
}
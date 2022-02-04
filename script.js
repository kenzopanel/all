var npath = window.location.pathname.split('/');

if (npath[1] == 'tugassiswa.php') {
    [...document.getElementsByClassName("mine")].forEach(e => e.remove());

    var div = document.createElement('div');
    div.innerHTML = '<a href="http://smansawiok.epizy.com/" class="btn btn-primary btn-lg mine" style="width:100%;margin-bottom:10px;" target="_blank">Cari Kunci Jawaban</a>';
    document.querySelector("section.content").prepend(div);
}

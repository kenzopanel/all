var npath = window.location.pathname.split('/');

if (npath[1] == 'tugassiswa.php') {
    var div = document.createElement('div');
    div.innerHTML = '<a href="http://smansawiok.epizy.com/" class="btn btn-primary btn-lg" style="width:100%;margin-bottom:10px;" target="_blank">Cari Kunci Jawaban</a>';
    document.querySelector("section.content").appendChild(div);
}

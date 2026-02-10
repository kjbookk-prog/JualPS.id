function kirimWA() {
  const username = document.getElementById('username').value.trim();
  let pesan = `Halo admin JualPS.id!%0A%0A` +
              `Mau beli: Luxury Rod Crate%0A` +
              `Harga: Rp 10.395%0A`;
  if (username) {
    pesan += `Username Roblox: ${encodeURIComponent(username)}%0A`;
  }
  pesan += `%0ATolong diproses ya min, terima kasih! 🙏`;

  window.open(`https://wa.me/qr/CWG6E6SCBP75M1?text=${pesan}`, '_blank');
}

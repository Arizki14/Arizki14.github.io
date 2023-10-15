const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'Your Key',
}

global.namabot = "Arizki Bot"
global.namaowner = "Arizki_Setyono"
global.packname = namabot
global.author = namaowner
global.myweb = "https://s.id/zeeoneofc"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285854415067']
global.pairingNumber = "" //pairing number to install bot 
global.sessionName = 'session'
global.background = "https://telegra.ph/file/40342e0085d521cb8b907.jpg" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.help = {
menu(pushname, salam, mundur, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

*HITUNG MUNDUR IDUL FITRI 🌜*
 ${mundur}

╭✄┈┈┈⟬ *STATISTIC* ⟭
┆❐ Upload : ${upload}
┆❐ Downloads : ${download}
┆❐ Total : ${totalGb} GB
┆❐ Used : ${usedGb} GB
┆❐ Free : ${freeGb} GB
╰──────────◇
╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${ownerName}
┆❐ Bot Name : ${botName}
┆❐ Time : ${jam}
┆❐ Date : ${tanggal}
┆❐ Runtime : ${runtime}
╰──────────◇

╭✄┈┈┈⟬ *Fitur* ⟭
┆❐ ${prefix}ffid
┆❐ ${prefix}setwelcome
┆❐ ${prefix}changewelcome
┆❐ ${prefix}delsetwelcome
┆❐ ${prefix}setleft
┆❐ ${prefix}changeleft
┆❐ ${prefix}delsetleft
┆❐ ${prefix}antiwame
┆❐ ${prefix}antiwame2
┆❐ ${prefix}open
┆❐ ${prefix}close
┆❐ ${prefix}antilink
┆❐ ${prefix}antilink2
┆❐ ${prefix}hidetag
╰──────────◇
`
}
}

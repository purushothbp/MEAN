const express = require('express');
const axios = require('axios');
const path = require('path');

const server = express();
const port = 3000;

server.get('/download', async (req, res) => {
  const url ='https://www.flaticon.com/download/icon/11229818?icon_id=11229818&author=431&team=431&keyword=Track&pack=packs%2Flogistic-145&style=3&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&token=03AFcWeA6C3Wg6s07uXcouJdWpAf3n_jsMTGOUXLlmB2fT7tzUZ-XUdgUgcNCIGqo2aJSXryqNwQmCC-qUzNoqMg4PR1Bg_gwOU_8izCgp0eqNwOGOfAu3HiKj7Gn95MFLqFKz9ST3tzhw9PuJO4s1udQGsS0MYMn6yeQSmQ1KGEzx9EOd68cxIn5CYa4r62CPvuxj2-c9Ao-GJrBpXDVCsSvaIiQi-uVxXggUZjxOf2ElyB6SXOeF-hxOAmSx01YqdCLE6m5JktsfGoTkN6W61DWHWwN7qAo21gy9L8dVaQ3hxIulMlX6_e4UzTZkkM1SfbIK9lq9AFmEwHktDlTl9bORBhiFbjuoQTDRMAbGo6JEiW5wxp2n6SBoClaq2NimObXSn2QUmvzWglAoa7oGmk7IPDfPrlONwfkjbbv48GrCN883QhbUmYbks4twvrC8uIGrLdMIZUmipKIpBb_3Jr6uLt8auPcMV8GrArVZdPaS73VZu0v-GGdlUXOhioj4zaSHuyMil0x-OnwTCK5-v9tvqWoTxvap46XoFxe1qeqLzE2zJXl6WTZQHaH6IHPhQ8ohIb3ar4w6YCT82kn_t_dcSmI2BRNipVAxQwxBlOCowcqqErmbDYN1N8fAZXBWG7CzNeuaQBt6A6H4JU7gAu2MCbjOTOAyGjkarNAvsGGl2cS-zp4uPbTg_nAC6bWqEFnzkTBX3Yg1t0xTGaWxwwmP_RQX_AtJTlIws_MbO2BPlCyvMYfNppWdIgYllYU8TeV4S7pW-XY1Lna3v6GjnknKjNCv0Q2yVBQ1mtBcHYz9G-QXQr03NHLVIhKiEdQEe3LK8-CM4RFKANbUzrUDFVrR5ivE7nyNeidjv9zPPqsacZ2CCkiNV1mj_0sFPLzxE_DTD1An6-mXPY5vzTwHAUDjJ9dxTVr_ZyxYZ3NwKNrVo5UmSNqZsavsIcNToRO5qj5TwKvgKviILYpFs9acCHJPFQ5J5gPwWDA_Qc-7tCxTw4jIDP_1Bgbe1YuMbGh-EgmPiqn1F1F8oXcfzHllrwhzQ_eKg2pfmj1P8LjC35v6QkZTWTwc35HZU0nrwpeLZFYYQvmNWXWr50TOuP5AT-eWj9ft9DVbf3aW2GYtle20piGwA5mOTWrTH1O1Fasjn8xPdWpqSNZls0GGb0JDy48ZRdNAWSixo3nArZwed73efFglwK7uNwo_Mg3L7oE0EIMzuSDJFG6l2_yd79mjcam_U58dH6dMHZEFXYbU0hhRg-rugMbA1eOT7oPUoHWRzh3GUIU3PvfHE5L_JWLSJ9Er52FzTGNYNpDs-VQVa3MkwxTjtnbwqQMoH5WM91oOyx0VFSCpavfWQZLpjulL3Zj_25LC5f_qonR2iWK35aS4P8jxKdYdcR9-WTjbUjL3iMEyjy7hmUI5rESC8SJuSsL-Z9u_GdfzgSR_vR_F_jeSTDmTPHbcFxyK2PCdirfmpBQKFWHT_VDdGU4sOhvhnAxZ706Jg0azhIdkRyeqOk8S1alPErr8kugpOoCJfJ4YEf_iezbb-x4t5uuYgW7xgIdC27rLzgDH2c8E34xc9o0XIiPz8PUMgabaj1XjoLuE6C2LsTxOarDv05yTj2zOZvwVsnYCXr_lkRupmE2mScRKRlemIaWNTJVFrWKeRBQtd-G4hiPW6VHZmsPTz6fMDR7G_yIgiWxhecbsGVrZldRu-6GvM4qRHyU6vRETokYvSy6ZhewSlbTlabMOh-rBDr5jP3Ak-H2rRbU69901i1NPPDrq7Jr1PZwSR0hrHyIowbPDGJ6hESKC';

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(response.data);

  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).send('Error downloading file.');
  }
});

server.listen(port, () => {
  console.log('Server is running on port', port);
});

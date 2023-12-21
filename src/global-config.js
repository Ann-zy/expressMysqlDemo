let host;
let h5host;// 跳转到另一项目的域名
let zzgHost;
if (process.env.NODE_ENV === "production") {
  if (process.env.CUSTOM_ENV === "dev") {
    host = "https://d-fssaas.lepass.cn";
    h5host = 'https://d-h5.lepass.cn';
    zzgHost = 'https://d-h5.lepass.cn';
  } else if (process.env.CUSTOM_ENV === "test") {
    host = "https://t-fssaas.lepass.cn";
    h5host = 'https://t-h5.lepass.cn';
    zzgHost = 'https://t-h5.lepass.cn';
  } else if (process.env.CUSTOM_ENV === "test2") {
    host = "https://t-fssaas2.lepass.cn";
    h5host = 'https://t-h5.lepass.cn';
    zzgHost = 'https://t-h5.lepass.cn';
  } else if (process.env.CUSTOM_ENV === "test3") {
    host = "https://t-fssaas3.lepass.cn";
    h5host = 'https://t-h5.lepass.cn';
    zzgHost = 'https://t-h5.lepass.cn';
  } else if (process.env.CUSTOM_ENV === "pre") {
    host = "https://p-fssaas.lepass.cn";
    h5host = 'https://p-h5.lepass.cn';
    zzgHost = 'https://p-h5.lepass.cn';
  } else if (process.env.CUSTOM_ENV === "prd") {
    host = "https://zzgsaas.leshuazf.com";
    h5host = 'https://zzgfs.leshuazf.com';
    zzgHost = 'https://zzgfs.leshuazf.com';
  }
} else {
  host = "http://localhost:8686/";
  // host = "http://10.20.58.36:8084/";
  // http://localhost:8082/
  // h5host = 'https://t-h5.lepass.cn';
  // host = "http://192.168.1.6:8081/";
}

module.exports = {
  host,
  h5host,
  zzgHost,
  syjVersion: 24, // 灰度版本号
};

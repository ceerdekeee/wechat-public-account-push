/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe2ac10f220a69d55',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '40c2c50ff13cf592476cef70d8caf9ef',

  PROVINCE: '浙江',
  CITY: '湖州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '涛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oImpS6S-x2dGMfuvrAfudiOf2uBE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ismZCF2u3eh4Tut07r12jAJw_iFVt1CZLX5TU_Ma2sQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-07',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '唯君', year: '1995', date: '08-07',
        },
        {
          type: '生日', name: '涛', year: '1994', date: '04-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '03-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-08-07' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ismZCF2u3eh4Tut07r12jAJw_iFVt1CZLX5TU_Ma2sQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wxid_x26sot9vshyn22',
    }
  ],

}

module.exports = USER_CONFIG


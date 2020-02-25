require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var op = require('./op');
var h = require('./helper');

var AES0 = h.bytes2Int32Buffer(h.b64Decode("pWNjxoR8fPiZd3fujXt79g3y8v+9a2vWsW9v3lTFxZFQMDBgAwEBAqlnZ859KytWGf7+52LX17Xmq6tNmnZ27EXKyo+dgoIfQMnJiYd9ffoV+vrv61lZsslHR44L8PD77K2tQWfU1LP9oqJf6q+vRb+cnCP3pKRTlnJy5FvAwJvCt7d1HP394a6Tkz1qJiZMWjY2bEE/P34C9/f1T8zMg1w0NGj0paVRNOXl0Qjx8fmTcXHic9jYq1MxMWI/FRUqDAQECFLHx5VlIyNGXsPDnSgYGDChlpY3DwUFCrWami8JBwcONhISJJuAgBs94uLfJuvrzWknJ07NsrJ/n3V16hsJCRKeg4MddCwsWC4aGjQtGxs2sm5u3O5aWrT7oKBb9lJSpE07O3Zh1ta3zrOzfXspKVI+4+PdcS8vXpeEhBP1U1OmaNHRuQAAAAAs7e3BYCAgQB/8/OPIsbF57Vtbtr5qatRGy8uN2b6+Z0s5OXLeSkqU1ExMmOhYWLBKz8+Fa9DQuyrv78XlqqpPFvv77cVDQ4bXTU2aVTMzZpSFhRHPRUWKEPn56QYCAgSBf3/+8FBQoEQ8PHi6n58l46ioS/NRUaL+o6NdwEBAgIqPjwWtkpI/vJ2dIUg4OHAE9fXx37y8Y8G2tnd12tqvYyEhQjAQECAa///lDvPz/W3S0r9Mzc2BFAwMGDUTEyYv7OzD4V9fvqKXlzXMRESIORcXLlfExJPyp6dVgn5+/Ec9PXqsZGTI511duisZGTKVc3PmoGBgwJiBgRnRT0+ef9zco2YiIkR+KipUq5CQO4OIiAvKRkaMKe7ux9O4uGs8FBQoed7ep+JeXrwdCwsWdtvbrTvg4NtWMjJkTjo6dB4KChTbSUmSCgYGDGwkJEjkXFy4XcLCn27T073vrKxDpmJixKiRkTmklZUxN+Tk04t5efIy5+fVQ8jIi1k3N263bW3ajI2NAWTV1bHSTk6c4KmpSbRsbNj6VlasB/T08yXq6s+vZWXKjnp69OmurkcYCAgQ1bq6b4h4ePBvJSVKci4uXCQcHDjxpqZXx7S0c1HGxpcj6OjLfN3doZx0dOghHx8+3UtLlty9vWGGi4sNhYqKD5BwcOBCPj58xLW1capmZszYSEiQBQMDBgH29vcSDg4co2Fhwl81NWr5V1eu0Lm5aZGGhhdYwcGZJx0dOrmenic44eHZE/j467OYmCszEREiu2lp0nDZ2amJjo4Hp5SUM7abmy0iHh48koeHFSDp6clJzs6H/1VVqngoKFB639+lj4yMA/ihoVmAiYkJFw0NGtq/v2Ux5ubXxkJChLhoaNDDQUGCsJmZKXctLVoRDw8ey7Cwe/xUVKjWu7ttOhYWLA=="));
var AES1 = h.bytes2Int32Buffer(h.b64Decode("Y2PGpXx8+IR3d+6Ze3v2jfLy/w1ra9a9b2/escXFkVQwMGBQAQECA2dnzqkrK1Z9/v7nGdfXtWKrq03mdnbsmsrKj0WCgh+dycmJQH19+of6+u8VWVmy60dHjsnw8PsLra1B7NTUs2eiol/9r69F6pycI7+kpFP3cnLklsDAm1u3t3XC/f3hHJOTPa4mJkxqNjZsWj8/fkH39/UCzMyDTzQ0aFylpVH05eXRNPHx+QhxceKT2NirczExYlMVFSo/BAQIDMfHlVIjI0Zlw8OdXhgYMCiWljehBQUKD5qaL7UHBw4JEhIkNoCAG5vi4t896+vNJicnTmmysn/NdXXqnwkJEhuDgx2eLCxYdBoaNC4bGzYtbm7cslpatO6goFv7UlKk9js7dk3W1rdhs7N9zikpUnvj490+Ly9ecYSEE5dTU6b10dG5aAAAAADt7cEsICBAYPz84x+xsXnIW1u27Wpq1L7Ly41Gvr5n2Tk5cktKSpTeTEyY1FhYsOjPz4VK0NC7a+/vxSqqqk/l+/vtFkNDhsVNTZrXMzNmVYWFEZRFRYrP+fnpEAICBAZ/f/6BUFCg8Dw8eESfnyW6qKhL41FRovOjo13+QECAwI+PBYqSkj+tnZ0hvDg4cEj19fEEvLxj37a2d8Ha2q91ISFCYxAQIDD//+Ua8/P9DtLSv23NzYFMDAwYFBMTJjXs7MMvX1++4ZeXNaJERIjMFxcuOcTEk1enp1Xyfn78gj09ekdkZMisXV265xkZMitzc+aVYGDAoIGBGZhPT57R3NyjfyIiRGYqKlR+kJA7q4iIC4NGRozK7u7HKbi4a9MUFCg83t6neV5evOILCxYd29utduDg2zsyMmRWOjp0TgoKFB5JSZLbBgYMCiQkSGxcXLjkwsKfXdPTvW6srEPvYmLEppGROaiVlTGk5OTTN3l58ovn59UyyMiLQzc3blltbdq3jY0BjNXVsWROTpzSqalJ4Gxs2LRWVqz69PTzB+rqzyVlZcqvenr0jq6uR+kICBAYurpv1Xh48IglJUpvLi5cchwcOCSmplfxtLRzx8bGl1Ho6Msj3d2hfHR06JwfHz4hS0uW3b29YdyLiw2GiooPhXBw4JA+PnxCtbVxxGZmzKpISJDYAwMGBfb29wEODhwSYWHCozU1al9XV675ublp0IaGF5HBwZlYHR06J56eJ7nh4dk4+PjrE5iYK7MRESIzaWnSu9nZqXCOjgeJlJQzp5ubLbYeHjwih4cVkunpySDOzodJVVWq/ygoUHjf36V6jIwDj6GhWfiJiQmADQ0aF7+/Zdrm5tcxQkKExmho0LhBQYLDmZkpsC0tWncPDx4RsLB7y1RUqPy7u23WFhYsOg=="));
var AES2 = h.bytes2Int32Buffer(h.b64Decode("Y8alY3z4hHx37pl3e/aNe/L/DfJr1r1rb96xb8WRVMUwYFAwAQIDAWfOqWcrVn0r/ucZ/te1YterTearduyadsqPRcqCH52CyYlAyX36h3367xX6WbLrWUeOyUfw+wvwrUHsrdSzZ9SiX/2ir0Xqr5wjv5ykU/ekcuSWcsCbW8C3dcK3/eEc/ZM9rpMmTGomNmxaNj9+QT/39QL3zINPzDRoXDSlUfSl5dE05fH5CPFx4pNx2Ktz2DFiUzEVKj8VBAgMBMeVUscjRmUjw51ewxgwKBiWN6GWBQoPBZovtZoHDgkHEiQ2EoAbm4Di3z3i680m6ydOaSeyf82ydeqfdQkSGwmDHZ6DLFh0LBo0LhobNi0bbtyyblq07lqgW/ugUqT2Ujt2TTvWt2HWs33OsylSeynj3T7jL15xL4QTl4RTpvVT0blo0QAAAADtwSztIEBgIPzjH/yxecixW7btW2rUvmrLjUbLvmfZvjlySzlKlN5KTJjUTFiw6FjPhUrP0Ltr0O/FKu+qT+Wq++0W+0OGxUNNmtdNM2ZVM4URlIVFis9F+ekQ+QIEBgJ//oF/UKDwUDx4RDyfJbqfqEvjqFGi81GjXf6jQIDAQI8Fio+SP62SnSG8nThwSDj18QT1vGPfvLZ3wbbar3XaIUJjIRAgMBD/5Rr/8/0O89K/bdLNgUzNDBgUDBMmNRPswy/sX77hX5c1opdEiMxEFy45F8STV8SnVfKnfvyCfj16Rz1kyKxkXbrnXRkyKxlz5pVzYMCgYIEZmIFPntFP3KN/3CJEZiIqVH4qkDurkIgLg4hGjMpG7scp7rhr07gUKDwU3qd53l684l4LFh0L26122+DbO+AyZFYyOnROOgoUHgpJkttJBgwKBiRIbCRcuORcwp9dwtO9btOsQ++sYsSmYpE5qJGVMaSV5NM35Hnyi3nn1TLnyItDyDduWTdt2rdtjQGMjdWxZNVOnNJOqUngqWzYtGxWrPpW9PMH9OrPJeplyq9levSOeq5H6a4IEBgIum/VunjwiHglSm8lLlxyLhw4JBymV/GmtHPHtMaXUcboyyPo3aF83XTonHQfPiEfS5bdS71h3L2LDYaLig+FinDgkHA+fEI+tXHEtWbMqmZIkNhIAwYFA/b3AfYOHBIOYcKjYTVqXzVXrvlXuWnQuYYXkYbBmVjBHTonHZ4nuZ7h2Tjh+OsT+Jgrs5gRIjMRadK7admpcNmOB4mOlDOnlJsttpsePCIehxWSh+nJIOnOh0nOVar/VShQeCjfpXrfjAOPjKFZ+KGJCYCJDRoXDb9l2r/m1zHmQoTGQmjQuGhBgsNBmSmwmS1ady0PHhEPsHvLsFSo/FS7bda7Fiw6Fg=="));
var AES3 = h.bytes2Int32Buffer(h.b64Decode("xqVjY/iEfHzumXd39o17e/8N8vLWvWtr3rFvb5FUxcVgUDAwAgMBAc6pZ2dWfSsr5xn+/rVi19dN5qur7Jp2do9FysofnYKCiUDJyfqHfX3vFfr6sutZWY7JR0f7C/DwQeytrbNn1NRf/aKiReqvryO/nJxT96Sk5JZycptbwMB1wre34Rz9/T2uk5NMaiYmbFo2Nn5BPz/1Avf3g0/MzGhcNDRR9KWl0TTl5fkI8fHik3Fxq3PY2GJTMTEqPxUVCAwEBJVSx8dGZSMjnV7DwzAoGBg3oZaWCg8FBS+1mpoOCQcHJDYSEhubgIDfPeLizSbr605pJyd/zbKy6p91dRIbCQkdnoODWHQsLDQuGho2LRsb3LJubrTuWlpb+6CgpPZSUnZNOzu3YdbWfc6zs1J7KSndPuPjXnEvLxOXhISm9VNTuWjR0QAAAADBLO3tQGAgIOMf/Px5yLGxtu1bW9S+amqNRsvLZ9m+vnJLOTmU3kpKmNRMTLDoWFiFSs/Pu2vQ0MUq7+9P5aqq7Rb7+4bFQ0Oa101NZlUzMxGUhYWKz0VF6RD5+QQGAgL+gX9/oPBQUHhEPDwlup+fS+OoqKLzUVFd/qOjgMBAQAWKj48/rZKSIbydnXBIODjxBPX1Y9+8vHfBtravddraQmMhISAwEBDlGv///Q7z879t0tKBTM3NGBQMDCY1ExPDL+zsvuFfXzWil5eIzERELjkXF5NXxMRV8qen/IJ+fnpHPT3IrGRkuuddXTIrGRnmlXNzwKBgYBmYgYGe0U9Po3/c3ERmIiJUfioqO6uQkAuDiIiMykZGxynu7mvTuLgoPBQUp3ne3rziXl4WHQsLrXbb29s74OBkVjIydE46OhQeCgqS20lJDAoGBkhsJCS45Fxcn13Cwr1u09ND76ysxKZiYjmokZExpJWV0zfk5PKLeXnVMufni0PIyG5ZNzfat21tAYyNjbFk1dWc0k5OSeCpqdi0bGys+lZW8wf09M8l6urKr2Vl9I56ekfprq4QGAgIb9W6uvCIeHhKbyUlXHIuLjgkHBxX8aamc8e0tJdRxsbLI+jooXzd3eicdHQ+IR8flt1LS2Hcvb0NhouLD4WKiuCQcHB8Qj4+ccS1tcyqZmaQ2EhIBgUDA/cB9vYcEg4OwqNhYWpfNTWu+VdXadC5uReRhoaZWMHBOicdHSe5np7ZOOHh6xP4+CuzmJgiMxER0rtpaalw2dkHiY6OM6eUlC22m5s8Ih4eFZKHh8kg6emHSc7Oqv9VVVB4KCilet/fA4+MjFn4oaEJgImJGhcNDWXav7/XMebmhMZCQtC4aGiCw0FBKbCZmVp3LS0eEQ8Pe8uwsKj8VFRt1ru7LDoWFg=="));
// var AES0 = [
//     0xA56363C6, 0x847C7CF8, 0x997777EE, 0x8D7B7BF6,
//     0x0DF2F2FF, 0xBD6B6BD6, 0xB16F6FDE, 0x54C5C591,
//     0x50303060, 0x03010102, 0xA96767CE, 0x7D2B2B56,
//     0x19FEFEE7, 0x62D7D7B5, 0xE6ABAB4D, 0x9A7676EC,
//     0x45CACA8F, 0x9D82821F, 0x40C9C989, 0x877D7DFA,
//     0x15FAFAEF, 0xEB5959B2, 0xC947478E, 0x0BF0F0FB,
//     0xECADAD41, 0x67D4D4B3, 0xFDA2A25F, 0xEAAFAF45,
//     0xBF9C9C23, 0xF7A4A453, 0x967272E4, 0x5BC0C09B,
//     0xC2B7B775, 0x1CFDFDE1, 0xAE93933D, 0x6A26264C,
//     0x5A36366C, 0x413F3F7E, 0x02F7F7F5, 0x4FCCCC83,
//     0x5C343468, 0xF4A5A551, 0x34E5E5D1, 0x08F1F1F9,
//     0x937171E2, 0x73D8D8AB, 0x53313162, 0x3F15152A,
//     0x0C040408, 0x52C7C795, 0x65232346, 0x5EC3C39D,
//     0x28181830, 0xA1969637, 0x0F05050A, 0xB59A9A2F,
//     0x0907070E, 0x36121224, 0x9B80801B, 0x3DE2E2DF,
//     0x26EBEBCD, 0x6927274E, 0xCDB2B27F, 0x9F7575EA,
//     0x1B090912, 0x9E83831D, 0x742C2C58, 0x2E1A1A34,
//     0x2D1B1B36, 0xB26E6EDC, 0xEE5A5AB4, 0xFBA0A05B,
//     0xF65252A4, 0x4D3B3B76, 0x61D6D6B7, 0xCEB3B37D,
//     0x7B292952, 0x3EE3E3DD, 0x712F2F5E, 0x97848413,
//     0xF55353A6, 0x68D1D1B9, 0x00000000, 0x2CEDEDC1,
//     0x60202040, 0x1FFCFCE3, 0xC8B1B179, 0xED5B5BB6,
//     0xBE6A6AD4, 0x46CBCB8D, 0xD9BEBE67, 0x4B393972,
//     0xDE4A4A94, 0xD44C4C98, 0xE85858B0, 0x4ACFCF85,
//     0x6BD0D0BB, 0x2AEFEFC5, 0xE5AAAA4F, 0x16FBFBED,
//     0xC5434386, 0xD74D4D9A, 0x55333366, 0x94858511,
//     0xCF45458A, 0x10F9F9E9, 0x06020204, 0x817F7FFE,
//     0xF05050A0, 0x443C3C78, 0xBA9F9F25, 0xE3A8A84B,
//     0xF35151A2, 0xFEA3A35D, 0xC0404080, 0x8A8F8F05,
//     0xAD92923F, 0xBC9D9D21, 0x48383870, 0x04F5F5F1,
//     0xDFBCBC63, 0xC1B6B677, 0x75DADAAF, 0x63212142,
//     0x30101020, 0x1AFFFFE5, 0x0EF3F3FD, 0x6DD2D2BF,
//     0x4CCDCD81, 0x140C0C18, 0x35131326, 0x2FECECC3,
//     0xE15F5FBE, 0xA2979735, 0xCC444488, 0x3917172E,
//     0x57C4C493, 0xF2A7A755, 0x827E7EFC, 0x473D3D7A,
//     0xAC6464C8, 0xE75D5DBA, 0x2B191932, 0x957373E6,
//     0xA06060C0, 0x98818119, 0xD14F4F9E, 0x7FDCDCA3,
//     0x66222244, 0x7E2A2A54, 0xAB90903B, 0x8388880B,
//     0xCA46468C, 0x29EEEEC7, 0xD3B8B86B, 0x3C141428,
//     0x79DEDEA7, 0xE25E5EBC, 0x1D0B0B16, 0x76DBDBAD,
//     0x3BE0E0DB, 0x56323264, 0x4E3A3A74, 0x1E0A0A14,
//     0xDB494992, 0x0A06060C, 0x6C242448, 0xE45C5CB8,
//     0x5DC2C29F, 0x6ED3D3BD, 0xEFACAC43, 0xA66262C4,
//     0xA8919139, 0xA4959531, 0x37E4E4D3, 0x8B7979F2,
//     0x32E7E7D5, 0x43C8C88B, 0x5937376E, 0xB76D6DDA,
//     0x8C8D8D01, 0x64D5D5B1, 0xD24E4E9C, 0xE0A9A949,
//     0xB46C6CD8, 0xFA5656AC, 0x07F4F4F3, 0x25EAEACF,
//     0xAF6565CA, 0x8E7A7AF4, 0xE9AEAE47, 0x18080810,
//     0xD5BABA6F, 0x887878F0, 0x6F25254A, 0x722E2E5C,
//     0x241C1C38, 0xF1A6A657, 0xC7B4B473, 0x51C6C697,
//     0x23E8E8CB, 0x7CDDDDA1, 0x9C7474E8, 0x211F1F3E,
//     0xDD4B4B96, 0xDCBDBD61, 0x868B8B0D, 0x858A8A0F,
//     0x907070E0, 0x423E3E7C, 0xC4B5B571, 0xAA6666CC,
//     0xD8484890, 0x05030306, 0x01F6F6F7, 0x120E0E1C,
//     0xA36161C2, 0x5F35356A, 0xF95757AE, 0xD0B9B969,
//     0x91868617, 0x58C1C199, 0x271D1D3A, 0xB99E9E27,
//     0x38E1E1D9, 0x13F8F8EB, 0xB398982B, 0x33111122,
//     0xBB6969D2, 0x70D9D9A9, 0x898E8E07, 0xA7949433,
//     0xB69B9B2D, 0x221E1E3C, 0x92878715, 0x20E9E9C9,
//     0x49CECE87, 0xFF5555AA, 0x78282850, 0x7ADFDFA5,
//     0x8F8C8C03, 0xF8A1A159, 0x80898909, 0x170D0D1A,
//     0xDABFBF65, 0x31E6E6D7, 0xC6424284, 0xB86868D0,
//     0xC3414182, 0xB0999929, 0x772D2D5A, 0x110F0F1E,
//     0xCBB0B07B, 0xFC5454A8, 0xD6BBBB6D, 0x3A16162C
// ];

// var AES1 = [
//     0x6363C6A5, 0x7C7CF884, 0x7777EE99, 0x7B7BF68D,
//     0xF2F2FF0D, 0x6B6BD6BD, 0x6F6FDEB1, 0xC5C59154,
//     0x30306050, 0x01010203, 0x6767CEA9, 0x2B2B567D,
//     0xFEFEE719, 0xD7D7B562, 0xABAB4DE6, 0x7676EC9A,
//     0xCACA8F45, 0x82821F9D, 0xC9C98940, 0x7D7DFA87,
//     0xFAFAEF15, 0x5959B2EB, 0x47478EC9, 0xF0F0FB0B,
//     0xADAD41EC, 0xD4D4B367, 0xA2A25FFD, 0xAFAF45EA,
//     0x9C9C23BF, 0xA4A453F7, 0x7272E496, 0xC0C09B5B,
//     0xB7B775C2, 0xFDFDE11C, 0x93933DAE, 0x26264C6A,
//     0x36366C5A, 0x3F3F7E41, 0xF7F7F502, 0xCCCC834F,
//     0x3434685C, 0xA5A551F4, 0xE5E5D134, 0xF1F1F908,
//     0x7171E293, 0xD8D8AB73, 0x31316253, 0x15152A3F,
//     0x0404080C, 0xC7C79552, 0x23234665, 0xC3C39D5E,
//     0x18183028, 0x969637A1, 0x05050A0F, 0x9A9A2FB5,
//     0x07070E09, 0x12122436, 0x80801B9B, 0xE2E2DF3D,
//     0xEBEBCD26, 0x27274E69, 0xB2B27FCD, 0x7575EA9F,
//     0x0909121B, 0x83831D9E, 0x2C2C5874, 0x1A1A342E,
//     0x1B1B362D, 0x6E6EDCB2, 0x5A5AB4EE, 0xA0A05BFB,
//     0x5252A4F6, 0x3B3B764D, 0xD6D6B761, 0xB3B37DCE,
//     0x2929527B, 0xE3E3DD3E, 0x2F2F5E71, 0x84841397,
//     0x5353A6F5, 0xD1D1B968, 0x00000000, 0xEDEDC12C,
//     0x20204060, 0xFCFCE31F, 0xB1B179C8, 0x5B5BB6ED,
//     0x6A6AD4BE, 0xCBCB8D46, 0xBEBE67D9, 0x3939724B,
//     0x4A4A94DE, 0x4C4C98D4, 0x5858B0E8, 0xCFCF854A,
//     0xD0D0BB6B, 0xEFEFC52A, 0xAAAA4FE5, 0xFBFBED16,
//     0x434386C5, 0x4D4D9AD7, 0x33336655, 0x85851194,
//     0x45458ACF, 0xF9F9E910, 0x02020406, 0x7F7FFE81,
//     0x5050A0F0, 0x3C3C7844, 0x9F9F25BA, 0xA8A84BE3,
//     0x5151A2F3, 0xA3A35DFE, 0x404080C0, 0x8F8F058A,
//     0x92923FAD, 0x9D9D21BC, 0x38387048, 0xF5F5F104,
//     0xBCBC63DF, 0xB6B677C1, 0xDADAAF75, 0x21214263,
//     0x10102030, 0xFFFFE51A, 0xF3F3FD0E, 0xD2D2BF6D,
//     0xCDCD814C, 0x0C0C1814, 0x13132635, 0xECECC32F,
//     0x5F5FBEE1, 0x979735A2, 0x444488CC, 0x17172E39,
//     0xC4C49357, 0xA7A755F2, 0x7E7EFC82, 0x3D3D7A47,
//     0x6464C8AC, 0x5D5DBAE7, 0x1919322B, 0x7373E695,
//     0x6060C0A0, 0x81811998, 0x4F4F9ED1, 0xDCDCA37F,
//     0x22224466, 0x2A2A547E, 0x90903BAB, 0x88880B83,
//     0x46468CCA, 0xEEEEC729, 0xB8B86BD3, 0x1414283C,
//     0xDEDEA779, 0x5E5EBCE2, 0x0B0B161D, 0xDBDBAD76,
//     0xE0E0DB3B, 0x32326456, 0x3A3A744E, 0x0A0A141E,
//     0x494992DB, 0x06060C0A, 0x2424486C, 0x5C5CB8E4,
//     0xC2C29F5D, 0xD3D3BD6E, 0xACAC43EF, 0x6262C4A6,
//     0x919139A8, 0x959531A4, 0xE4E4D337, 0x7979F28B,
//     0xE7E7D532, 0xC8C88B43, 0x37376E59, 0x6D6DDAB7,
//     0x8D8D018C, 0xD5D5B164, 0x4E4E9CD2, 0xA9A949E0,
//     0x6C6CD8B4, 0x5656ACFA, 0xF4F4F307, 0xEAEACF25,
//     0x6565CAAF, 0x7A7AF48E, 0xAEAE47E9, 0x08081018,
//     0xBABA6FD5, 0x7878F088, 0x25254A6F, 0x2E2E5C72,
//     0x1C1C3824, 0xA6A657F1, 0xB4B473C7, 0xC6C69751,
//     0xE8E8CB23, 0xDDDDA17C, 0x7474E89C, 0x1F1F3E21,
//     0x4B4B96DD, 0xBDBD61DC, 0x8B8B0D86, 0x8A8A0F85,
//     0x7070E090, 0x3E3E7C42, 0xB5B571C4, 0x6666CCAA,
//     0x484890D8, 0x03030605, 0xF6F6F701, 0x0E0E1C12,
//     0x6161C2A3, 0x35356A5F, 0x5757AEF9, 0xB9B969D0,
//     0x86861791, 0xC1C19958, 0x1D1D3A27, 0x9E9E27B9,
//     0xE1E1D938, 0xF8F8EB13, 0x98982BB3, 0x11112233,
//     0x6969D2BB, 0xD9D9A970, 0x8E8E0789, 0x949433A7,
//     0x9B9B2DB6, 0x1E1E3C22, 0x87871592, 0xE9E9C920,
//     0xCECE8749, 0x5555AAFF, 0x28285078, 0xDFDFA57A,
//     0x8C8C038F, 0xA1A159F8, 0x89890980, 0x0D0D1A17,
//     0xBFBF65DA, 0xE6E6D731, 0x424284C6, 0x6868D0B8,
//     0x414182C3, 0x999929B0, 0x2D2D5A77, 0x0F0F1E11,
//     0xB0B07BCB, 0x5454A8FC, 0xBBBB6DD6, 0x16162C3A
// ];

// var AES2 = [
//     0x63C6A563, 0x7CF8847C, 0x77EE9977, 0x7BF68D7B,
//     0xF2FF0DF2, 0x6BD6BD6B, 0x6FDEB16F, 0xC59154C5,
//     0x30605030, 0x01020301, 0x67CEA967, 0x2B567D2B,
//     0xFEE719FE, 0xD7B562D7, 0xAB4DE6AB, 0x76EC9A76,
//     0xCA8F45CA, 0x821F9D82, 0xC98940C9, 0x7DFA877D,
//     0xFAEF15FA, 0x59B2EB59, 0x478EC947, 0xF0FB0BF0,
//     0xAD41ECAD, 0xD4B367D4, 0xA25FFDA2, 0xAF45EAAF,
//     0x9C23BF9C, 0xA453F7A4, 0x72E49672, 0xC09B5BC0,
//     0xB775C2B7, 0xFDE11CFD, 0x933DAE93, 0x264C6A26,
//     0x366C5A36, 0x3F7E413F, 0xF7F502F7, 0xCC834FCC,
//     0x34685C34, 0xA551F4A5, 0xE5D134E5, 0xF1F908F1,
//     0x71E29371, 0xD8AB73D8, 0x31625331, 0x152A3F15,
//     0x04080C04, 0xC79552C7, 0x23466523, 0xC39D5EC3,
//     0x18302818, 0x9637A196, 0x050A0F05, 0x9A2FB59A,
//     0x070E0907, 0x12243612, 0x801B9B80, 0xE2DF3DE2,
//     0xEBCD26EB, 0x274E6927, 0xB27FCDB2, 0x75EA9F75,
//     0x09121B09, 0x831D9E83, 0x2C58742C, 0x1A342E1A,
//     0x1B362D1B, 0x6EDCB26E, 0x5AB4EE5A, 0xA05BFBA0,
//     0x52A4F652, 0x3B764D3B, 0xD6B761D6, 0xB37DCEB3,
//     0x29527B29, 0xE3DD3EE3, 0x2F5E712F, 0x84139784,
//     0x53A6F553, 0xD1B968D1, 0x00000000, 0xEDC12CED,
//     0x20406020, 0xFCE31FFC, 0xB179C8B1, 0x5BB6ED5B,
//     0x6AD4BE6A, 0xCB8D46CB, 0xBE67D9BE, 0x39724B39,
//     0x4A94DE4A, 0x4C98D44C, 0x58B0E858, 0xCF854ACF,
//     0xD0BB6BD0, 0xEFC52AEF, 0xAA4FE5AA, 0xFBED16FB,
//     0x4386C543, 0x4D9AD74D, 0x33665533, 0x85119485,
//     0x458ACF45, 0xF9E910F9, 0x02040602, 0x7FFE817F,
//     0x50A0F050, 0x3C78443C, 0x9F25BA9F, 0xA84BE3A8,
//     0x51A2F351, 0xA35DFEA3, 0x4080C040, 0x8F058A8F,
//     0x923FAD92, 0x9D21BC9D, 0x38704838, 0xF5F104F5,
//     0xBC63DFBC, 0xB677C1B6, 0xDAAF75DA, 0x21426321,
//     0x10203010, 0xFFE51AFF, 0xF3FD0EF3, 0xD2BF6DD2,
//     0xCD814CCD, 0x0C18140C, 0x13263513, 0xECC32FEC,
//     0x5FBEE15F, 0x9735A297, 0x4488CC44, 0x172E3917,
//     0xC49357C4, 0xA755F2A7, 0x7EFC827E, 0x3D7A473D,
//     0x64C8AC64, 0x5DBAE75D, 0x19322B19, 0x73E69573,
//     0x60C0A060, 0x81199881, 0x4F9ED14F, 0xDCA37FDC,
//     0x22446622, 0x2A547E2A, 0x903BAB90, 0x880B8388,
//     0x468CCA46, 0xEEC729EE, 0xB86BD3B8, 0x14283C14,
//     0xDEA779DE, 0x5EBCE25E, 0x0B161D0B, 0xDBAD76DB,
//     0xE0DB3BE0, 0x32645632, 0x3A744E3A, 0x0A141E0A,
//     0x4992DB49, 0x060C0A06, 0x24486C24, 0x5CB8E45C,
//     0xC29F5DC2, 0xD3BD6ED3, 0xAC43EFAC, 0x62C4A662,
//     0x9139A891, 0x9531A495, 0xE4D337E4, 0x79F28B79,
//     0xE7D532E7, 0xC88B43C8, 0x376E5937, 0x6DDAB76D,
//     0x8D018C8D, 0xD5B164D5, 0x4E9CD24E, 0xA949E0A9,
//     0x6CD8B46C, 0x56ACFA56, 0xF4F307F4, 0xEACF25EA,
//     0x65CAAF65, 0x7AF48E7A, 0xAE47E9AE, 0x08101808,
//     0xBA6FD5BA, 0x78F08878, 0x254A6F25, 0x2E5C722E,
//     0x1C38241C, 0xA657F1A6, 0xB473C7B4, 0xC69751C6,
//     0xE8CB23E8, 0xDDA17CDD, 0x74E89C74, 0x1F3E211F,
//     0x4B96DD4B, 0xBD61DCBD, 0x8B0D868B, 0x8A0F858A,
//     0x70E09070, 0x3E7C423E, 0xB571C4B5, 0x66CCAA66,
//     0x4890D848, 0x03060503, 0xF6F701F6, 0x0E1C120E,
//     0x61C2A361, 0x356A5F35, 0x57AEF957, 0xB969D0B9,
//     0x86179186, 0xC19958C1, 0x1D3A271D, 0x9E27B99E,
//     0xE1D938E1, 0xF8EB13F8, 0x982BB398, 0x11223311,
//     0x69D2BB69, 0xD9A970D9, 0x8E07898E, 0x9433A794,
//     0x9B2DB69B, 0x1E3C221E, 0x87159287, 0xE9C920E9,
//     0xCE8749CE, 0x55AAFF55, 0x28507828, 0xDFA57ADF,
//     0x8C038F8C, 0xA159F8A1, 0x89098089, 0x0D1A170D,
//     0xBF65DABF, 0xE6D731E6, 0x4284C642, 0x68D0B868,
//     0x4182C341, 0x9929B099, 0x2D5A772D, 0x0F1E110F,
//     0xB07BCBB0, 0x54A8FC54, 0xBB6DD6BB, 0x162C3A16
// ];

// var AES3 = [
//     0xC6A56363, 0xF8847C7C, 0xEE997777, 0xF68D7B7B,
//     0xFF0DF2F2, 0xD6BD6B6B, 0xDEB16F6F, 0x9154C5C5,
//     0x60503030, 0x02030101, 0xCEA96767, 0x567D2B2B,
//     0xE719FEFE, 0xB562D7D7, 0x4DE6ABAB, 0xEC9A7676,
//     0x8F45CACA, 0x1F9D8282, 0x8940C9C9, 0xFA877D7D,
//     0xEF15FAFA, 0xB2EB5959, 0x8EC94747, 0xFB0BF0F0,
//     0x41ECADAD, 0xB367D4D4, 0x5FFDA2A2, 0x45EAAFAF,
//     0x23BF9C9C, 0x53F7A4A4, 0xE4967272, 0x9B5BC0C0,
//     0x75C2B7B7, 0xE11CFDFD, 0x3DAE9393, 0x4C6A2626,
//     0x6C5A3636, 0x7E413F3F, 0xF502F7F7, 0x834FCCCC,
//     0x685C3434, 0x51F4A5A5, 0xD134E5E5, 0xF908F1F1,
//     0xE2937171, 0xAB73D8D8, 0x62533131, 0x2A3F1515,
//     0x080C0404, 0x9552C7C7, 0x46652323, 0x9D5EC3C3,
//     0x30281818, 0x37A19696, 0x0A0F0505, 0x2FB59A9A,
//     0x0E090707, 0x24361212, 0x1B9B8080, 0xDF3DE2E2,
//     0xCD26EBEB, 0x4E692727, 0x7FCDB2B2, 0xEA9F7575,
//     0x121B0909, 0x1D9E8383, 0x58742C2C, 0x342E1A1A,
//     0x362D1B1B, 0xDCB26E6E, 0xB4EE5A5A, 0x5BFBA0A0,
//     0xA4F65252, 0x764D3B3B, 0xB761D6D6, 0x7DCEB3B3,
//     0x527B2929, 0xDD3EE3E3, 0x5E712F2F, 0x13978484,
//     0xA6F55353, 0xB968D1D1, 0x00000000, 0xC12CEDED,
//     0x40602020, 0xE31FFCFC, 0x79C8B1B1, 0xB6ED5B5B,
//     0xD4BE6A6A, 0x8D46CBCB, 0x67D9BEBE, 0x724B3939,
//     0x94DE4A4A, 0x98D44C4C, 0xB0E85858, 0x854ACFCF,
//     0xBB6BD0D0, 0xC52AEFEF, 0x4FE5AAAA, 0xED16FBFB,
//     0x86C54343, 0x9AD74D4D, 0x66553333, 0x11948585,
//     0x8ACF4545, 0xE910F9F9, 0x04060202, 0xFE817F7F,
//     0xA0F05050, 0x78443C3C, 0x25BA9F9F, 0x4BE3A8A8,
//     0xA2F35151, 0x5DFEA3A3, 0x80C04040, 0x058A8F8F,
//     0x3FAD9292, 0x21BC9D9D, 0x70483838, 0xF104F5F5,
//     0x63DFBCBC, 0x77C1B6B6, 0xAF75DADA, 0x42632121,
//     0x20301010, 0xE51AFFFF, 0xFD0EF3F3, 0xBF6DD2D2,
//     0x814CCDCD, 0x18140C0C, 0x26351313, 0xC32FECEC,
//     0xBEE15F5F, 0x35A29797, 0x88CC4444, 0x2E391717,
//     0x9357C4C4, 0x55F2A7A7, 0xFC827E7E, 0x7A473D3D,
//     0xC8AC6464, 0xBAE75D5D, 0x322B1919, 0xE6957373,
//     0xC0A06060, 0x19988181, 0x9ED14F4F, 0xA37FDCDC,
//     0x44662222, 0x547E2A2A, 0x3BAB9090, 0x0B838888,
//     0x8CCA4646, 0xC729EEEE, 0x6BD3B8B8, 0x283C1414,
//     0xA779DEDE, 0xBCE25E5E, 0x161D0B0B, 0xAD76DBDB,
//     0xDB3BE0E0, 0x64563232, 0x744E3A3A, 0x141E0A0A,
//     0x92DB4949, 0x0C0A0606, 0x486C2424, 0xB8E45C5C,
//     0x9F5DC2C2, 0xBD6ED3D3, 0x43EFACAC, 0xC4A66262,
//     0x39A89191, 0x31A49595, 0xD337E4E4, 0xF28B7979,
//     0xD532E7E7, 0x8B43C8C8, 0x6E593737, 0xDAB76D6D,
//     0x018C8D8D, 0xB164D5D5, 0x9CD24E4E, 0x49E0A9A9,
//     0xD8B46C6C, 0xACFA5656, 0xF307F4F4, 0xCF25EAEA,
//     0xCAAF6565, 0xF48E7A7A, 0x47E9AEAE, 0x10180808,
//     0x6FD5BABA, 0xF0887878, 0x4A6F2525, 0x5C722E2E,
//     0x38241C1C, 0x57F1A6A6, 0x73C7B4B4, 0x9751C6C6,
//     0xCB23E8E8, 0xA17CDDDD, 0xE89C7474, 0x3E211F1F,
//     0x96DD4B4B, 0x61DCBDBD, 0x0D868B8B, 0x0F858A8A,
//     0xE0907070, 0x7C423E3E, 0x71C4B5B5, 0xCCAA6666,
//     0x90D84848, 0x06050303, 0xF701F6F6, 0x1C120E0E,
//     0xC2A36161, 0x6A5F3535, 0xAEF95757, 0x69D0B9B9,
//     0x17918686, 0x9958C1C1, 0x3A271D1D, 0x27B99E9E,
//     0xD938E1E1, 0xEB13F8F8, 0x2BB39898, 0x22331111,
//     0xD2BB6969, 0xA970D9D9, 0x07898E8E, 0x33A79494,
//     0x2DB69B9B, 0x3C221E1E, 0x15928787, 0xC920E9E9,
//     0x8749CECE, 0xAAFF5555, 0x50782828, 0xA57ADFDF,
//     0x038F8C8C, 0x59F8A1A1, 0x09808989, 0x1A170D0D,
//     0x65DABFBF, 0xD731E6E6, 0x84C64242, 0xD0B86868,
//     0x82C34141, 0x29B09999, 0x5A772D2D, 0x1E110F0F,
//     0x7BCBB0B0, 0xA8FC5454, 0x6DD6BBBB, 0x2C3A1616
// ];


module.exports.AES_ROUND_LE = function(X, K, Y) {
    (Y[0]) = AES0[(X[0]) & 0xFF] ^
        AES1[((X[1]) >>> 8) & 0xFF] ^
        AES2[((X[2]) >>> 16) & 0xFF] ^
        AES3[((X[3]) >>> 24) & 0xFF] ^ (K[0]);
    (Y[1]) = AES0[(X[1]) & 0xFF] ^
        AES1[((X[2]) >>> 8) & 0xFF] ^
        AES2[((X[3]) >>> 16) & 0xFF] ^
        AES3[((X[0]) >>> 24) & 0xFF] ^ (K[1]);
    (Y[2]) = AES0[(X[2]) & 0xFF] ^
        AES1[((X[3]) >>> 8) & 0xFF] ^
        AES2[((X[0]) >>> 16) & 0xFF] ^
        AES3[((X[1]) >>> 24) & 0xFF] ^ (K[2]);
    (Y[3]) = AES0[(X[3]) & 0xFF] ^
        AES1[((X[0]) >>> 8) & 0xFF] ^
        AES2[((X[1]) >>> 16) & 0xFF] ^
        AES3[((X[2]) >>> 24) & 0xFF] ^ (K[3]);
}

module.exports.AES_ROUND_NOKEY_LE = function(X, Y) {
    var K = new Array(4);
    op.bufferSet(K, 0, 0, 4);
    this.AES_ROUND_LE(X, K, Y);
}
},{"./helper":3,"./op":6}],2:[function(require,module,exports){
/////////////////////////////////////
///////////////  Echo ///////////////
/////////////////////////////////////

var op = require('./op');
var h = require('./helper');
var aes = require('./aes');

var ECHO_BlockSize = 128;

var subWords = function(W, pK) {
  for (var n = 0; n < 16; n++) {
    var X = W[n];
    var Y = new Array(4);
    aes.AES_ROUND_LE(X, pK, Y);
    aes.AES_ROUND_NOKEY_LE(Y, X);
    if ((pK[0] = op.t32(pK[0] + 1)) === 0) {
      if ((pK[1] = op.t32(pK[1] + 1)) === 0)
        if ((pK[2] = op.t32(pK[2] + 1)) === 0)
          pK[3] = op.t32(pK[3] + 1);
    }
  }
}

var shiftRow1 = function(W, a, b, c, d) {
  var tmp;
  tmp = W[a][0];
  W[a][0] = W[b][0];
  W[b][0] = W[c][0];
  W[c][0] = W[d][0];
  W[d][0] = tmp;
  tmp = W[a][1];
  W[a][1] = W[b][1];
  W[b][1] = W[c][1];
  W[c][1] = W[d][1];
  W[d][1] = tmp;
  tmp = W[a][2];
  W[a][2] = W[b][2];
  W[b][2] = W[c][2];
  W[c][2] = W[d][2];
  W[d][2] = tmp;
  tmp = W[a][3];
  W[a][3] = W[b][3];
  W[b][3] = W[c][3];
  W[c][3] = W[d][3];
  W[d][3] = tmp;
}

var shiftRow2 = function(W, a, b, c, d) {
  var tmp;
  tmp = W[a][0];
  W[a][0] = W[c][0];
  W[c][0] = tmp;
  tmp = W[b][0];
  W[b][0] = W[d][0];
  W[d][0] = tmp;
  tmp = W[a][1];
  W[a][1] = W[c][1];
  W[c][1] = tmp;
  tmp = W[b][1];
  W[b][1] = W[d][1];
  W[d][1] = tmp;
  tmp = W[a][2];
  W[a][2] = W[c][2];
  W[c][2] = tmp;
  tmp = W[b][2];
  W[b][2] = W[d][2];
  W[d][2] = tmp;
  tmp = W[a][3];
  W[a][3] = W[c][3];
  W[c][3] = tmp;
  tmp = W[b][3];
  W[b][3] = W[d][3];
  W[d][3] = tmp;
}

var shiftRow3 = function(W, a, b, c, d) {
  shiftRow1(W, d, c, b, a);
}

var shiftRows = function(W) {
  shiftRow1(W, 1, 5, 9, 13);
  shiftRow2(W, 2, 6, 10, 14);
  shiftRow3(W, 3, 7, 11, 15);
}

var mixColumn = function(W, ia, ib, ic, id) {
  for (var n = 0; n < 4; n++) {
    var a = W[ia][n];
    var b = W[ib][n];
    var c = W[ic][n];
    var d = W[id][n];
    var ab = a ^ b;
    var bc = b ^ c;
    var cd = c ^ d;
    var abx = ((ab & (0x80808080)) >>> 7) * 27 ^
      ((ab & (0x7F7F7F7F)) << 1);
    var bcx = ((bc & (0x80808080)) >>> 7) * 27 ^
      ((bc & (0x7F7F7F7F)) << 1);
    var cdx = ((cd & (0x80808080)) >>> 7) * 27 ^
      ((cd & (0x7F7F7F7F)) << 1);
    W[ia][n] = abx ^ bc ^ d;
    W[ib][n] = bcx ^ a ^ cd;
    W[ic][n] = cdx ^ ab ^ d;
    W[id][n] = abx ^ bcx ^ cdx ^ ab ^ c;
  }
}

var finalize = function(ctx, W) {
  var int32Buf = op.swap32Array(h.bytes2Int32Buffer(ctx.buffer));
  for (var u = 0; u < 8; u++) {
    for (var v = 0; v < 4; v++) {
      ctx.state[u][v] ^= int32Buf[u * 4 + v] ^ W[u][v] ^ W[u + 8][v];
    }
  }
}

var inputBlock = function(ctx, W) {
  op.buffer2Insert(W, 0, 0, ctx.state, 8, 4);
  var int32Buf = op.swap32Array(h.bytes2Int32Buffer(ctx.buffer));
  for (var u = 0; u < 8; u++) {
    W[u + 8][0] = (int32Buf[4 * u]);
    W[u + 8][1] = (int32Buf[4 * u + 1]);
    W[u + 8][2] = (int32Buf[4 * u + 2]);
    W[u + 8][3] = (int32Buf[4 * u + 3]);
  }
}

var mixColumns = function(W) {
  mixColumn(W, 0, 1, 2, 3);
  mixColumn(W, 4, 5, 6, 7);
  mixColumn(W, 8, 9, 10, 11);
  mixColumn(W, 12, 13, 14, 15);
}

var ROUND = function(W,K) {
  subWords(W,K);
  shiftRows(W);
  mixColumns(W);
}

var compress = function(ctx) {
  var W = new Array(16);
  for (var i = 0; i < 16; i++) {
    W[i] = new Array(4);
  }
  var K = new Array(4);
  op.bufferInsert(K,0,ctx.C,4);
  inputBlock(ctx, W);
  for (var u = 0; u < 10; u++) {
    ROUND(W,K);
  }
  finalize(ctx,W);
}

var incrCounter = function(ctx, val) {
  ctx.C[0] = op.t32(ctx.C[0] + op.t32(val));
  if (ctx.C[0] < op.t32(val)) {
    if ((ctx.C[1] = op.t32(ctx.C[1] + 1)) === 0) {
      if ((ctx.C[2] = op.t32(ctx.C[2] + 1)) === 0) {
        ctx.C[3] = op.t32(ctx.C[3] + 1);
      }
    }
  }
}

var echoInit = function(ctx) {
  ctx.state = new Array(8);
  for (var i = 0; i < 8; i++) {
    ctx.state[i] = new Array(4);
  }
  ctx.state[0][0] = 512;
  ctx.state[0][1] = ctx.state[0][2] = ctx.state[0][3] = 0;
  ctx.state[1][0] = 512;
  ctx.state[1][1] = ctx.state[1][2] = ctx.state[1][3] = 0;
  ctx.state[2][0] = 512;
  ctx.state[2][1] = ctx.state[2][2] = ctx.state[2][3] = 0;
  ctx.state[3][0] = 512;
  ctx.state[3][1] = ctx.state[3][2] = ctx.state[3][3] = 0;
  ctx.state[4][0] = 512;
  ctx.state[4][1] = ctx.state[4][2] = ctx.state[4][3] = 0;
  ctx.state[5][0] = 512;
  ctx.state[5][1] = ctx.state[5][2] = ctx.state[5][3] = 0;
  ctx.state[6][0] = 512;
  ctx.state[6][1] = ctx.state[6][2] = ctx.state[6][3] = 0;
  ctx.state[7][0] = 512;
  ctx.state[7][1] = ctx.state[7][2] = ctx.state[7][3] = 0;
  ctx.ptr = 0;
  ctx.C = new Array(4);
  op.bufferSet(ctx.C,0,0,4);
  ctx.buffer = new Array(ECHO_BlockSize);
}

var echo = function(ctx, data) {
  var buf, ptr;
  buf = ctx.buffer;
  ptr = ctx.ptr;
  var len = data.length;
  if (len < ctx.buffer.length - ptr) {
    op.bufferInsert(buf, ptr, data, data.length);
    ptr += data.length;
    ctx.ptr = ptr;
    return;
  }
  while (len > 0) {
    var clen = ctx.buffer.length - ptr;
    if (clen > len) clen = len;
    op.bufferInsert(buf, ptr, data, clen);
    ptr += clen;
    data = data.slice(clen);
    len -= clen;
    if (ptr === ctx.buffer.length) {
      var int32Buf = h.bytes2Int32Buffer(buf);
      incrCounter(ctx, 1024);
      compress(ctx);
      ptr = 0;
    }
  }
  ctx.ptr = ptr;
}

var echoClose = function(ctx) {
  var out = new Array(16);
  var buf = ctx.buffer;
  var len = ctx.buffer.length;
  var ptr = ctx.ptr;
  var elen = (ptr << 3);
  incrCounter(ctx, elen);
  var cBytes = h.int32Buffer2Bytes(op.swap32Array(ctx.C));
  /*
   * If elen is zero, then this block actually contains no message
   * bit, only the first padding bit.
   */
  if (elen === 0) {
    ctx.C[0] = ctx.C[1] = ctx.C[2] = ctx.C[3] = 0;
  }
  buf[ptr++] = 0x80;

  op.bufferSet(buf,ptr, 0, len - ptr);
  if (ptr > (len - 18)) {
    compress(ctx);
    op.bufferSet(ctx.C,0,0,4);
    op.bufferSet(buf, 0, 0,len);
  }
  buf[len - 17] = 2;
  op.bufferInsert(buf,len - 16, cBytes, 16);
  compress(ctx);
  for (var u = 0; u < 4; u++) {
    for (var v = 0; v < 4; v++) {
      out[u*4 + v] = op.swap32(ctx.state[u][v]);
    }
  }
  return out;
}

module.exports = function(input, format, output) {
  var msg;
  if (format === 1) {
    msg = input;
  }
  else if (format === 2) {
    msg = h.int32Buffer2Bytes(input);
  }
  else {
    msg = h.string2bytes(input);
  }
  var ctx = {};
  echoInit(ctx);
  echo(ctx, msg);
  var r = echoClose(ctx);
  var out;
  if (output === 2) {
    out = r;
  }
  else if (output === 1) {
    out = h.int32Buffer2Bytes(r)
  }
  else {
    out = h.int32ArrayToHexString(r)
  }
  return out;
}

},{"./aes":1,"./helper":3,"./op":6}],3:[function(require,module,exports){
'use strict';
// String functions

var op = require('./op.js');

module.exports.int8ArrayToHexString = function toString(array) {
	var string = '';

	for (var i = 0; i < array.length; i++) {
		if (array[i] < 16) {
			string += '0' + array[i].toString(16);
		}
		else {
			string += array[i].toString(16);
		}
	}
	return string;
}

module.exports.int32ArrayToHexString = function toString(array) {
	var string = '';
	var len = array.length;
	for (var i = 0; i < len; i++) {
		var s = array[i];
		if (s < 0) {
			s = 0xFFFFFFFF + array[i] + 1;
		}
		var l = s.toString(16);
		var padding = 8;
		while (l.length < padding) {
			l = "0" + l;
		}
		string += l;
	}
	return string;
}

module.exports.hex2string = function toString(s) {
	for (var c = [], len = s.length, i = 0; i < len; i += 2)
		c.push(String.fromCharCode(parseInt(s.substring(i, i + 2), 16)));
	return c.join('');
}

module.exports.hex2bytes = function toString(s) {
	for (var c = [], len = s.length, i = 0; i < len; i += 2)
		c.push(parseInt(s.substring(i, i + 2), 16));
	return c;
}
/*
module.exports.string2hex = function toString(s) {

	for (var p = [], len = s.length, i = 0; i < len; i++) {
		p.push((256 + s.charCodeAt(i)).toString(16).substring(1));
	}
	return p.join('');
}
*/
module.exports.string2bytes = function(s) {
	var len = s.length;
	var b = new Array(len);
	var i = 0;
	while (i < len) {
		b[i] = s.charCodeAt(i);
		i++;
	}
	return b;
}
/*
module.exports.bytes2Int16Buffer = function(b) {
	var len = b.length;
	var bufferLength = len ? (((len - 1) >>> 1) + 1) : 0;
	var buffer = new Array(bufferLength);
	var i = 0;
	var j = 0;
	while (i < len) {
		buffer[j] = (buffer[j] << 8) | b[i];
		i++;
		if (!(i % 2)) j++;
	}
	return buffer;
}
*/

module.exports.bytes2Int32Buffer = function(b) {
	if (!b) return [];
	var len = b.length ? (((b.length - 1) >>> 2) + 1) : 0;
	var buffer = new Array(len);
	var j = 0;
	while (j < len) {
		buffer[j] = (b[j * 4] << 24) | (b[j * 4 + 1] << 16) | (b[j * 4 + 2] << 8) | b[j * 4 + 3];
		j++;
	}
	return buffer;
}
/*
module.exports.bytes2Int32BufferLeAligned = function(b) {
	var len = b.length;
	if (!len) return [];
	var len2 = len ? (((len - 1) >>> 2) + 1) : 0;
	var buffer = new Array(len);
	var j = 0;
	while (j < len2) {
		buffer[j] = (b[j * 4 + 3] << 24) | (b[j * 4 + 2] << 16) | (b[j * 4 + 1] << 8) | b[j * 4];
		j++;
	};
	return buffer;
}
*/
module.exports.bytes2Int64Buffer = function(b) {
	if (!b) return [];
	var len = b.length ? (((b.length - 1) >>> 3) + 1) : 0;
	var buffer = new Array(len);
	var j = 0;
	while (j < len) {
		buffer[j] = new op.u64((b[j * 8] << 24) | (b[j * 8 + 1] << 16) | (b[j * 8 + 2] << 8) | b[j * 8 + 3], (b[j * 8 + 4] << 24) | (b[j * 8 + 5] << 16) | (b[j * 8 + 6] << 8) | b[j * 8 + 7]);
		j++;
	}
	return buffer;
}

module.exports.bytes2Int64BufferLeAligned = function(b) {
	if (!b) return [];
	var len =  b.length ? ((( b.length - 1) >>> 3) + 1) : 0;
	var buffer = new Array(len);
	var j = 0;
	while (j < len) {
		buffer[j] = new op.u64((b[j * 8 + 7] << 24) | (b[j * 8 + 6] << 16) | (b[j * 8 + 5] << 8) | b[j * 8 + 4], (b[j * 8 + 3] << 24) | (b[j * 8 + 2] << 16) | (b[j * 8 + 1] << 8) | b[j * 8]);
		j++;
	}
	return buffer;
}

module.exports.bufferEncode64leAligned = function(buffer, offset, uint64) {
	buffer[offset + 7] = uint64.hi >>> 24;
	buffer[offset + 6] = uint64.hi >>> 16 & 0xFF;
	buffer[offset + 5] = uint64.hi >>> 8 & 0xFF;
	buffer[offset + 4] = uint64.hi & 0xFF;
	buffer[offset + 3] = uint64.lo >>> 24;
	buffer[offset + 2] = uint64.lo >>> 16 & 0xFF;
	buffer[offset + 1] = uint64.lo >>> 8 & 0xFF;
	buffer[offset + 0] = uint64.lo & 0xFF;
}

module.exports.bufferEncode64 = function(buffer, offset, uint64) {
	buffer[offset] = uint64.hi >>> 24;
	buffer[offset + 1] = uint64.hi >>> 16 & 0xFF;
	buffer[offset + 2] = uint64.hi >>> 8 & 0xFF;
	buffer[offset + 3] = uint64.hi & 0xFF;
	buffer[offset + 4] = uint64.lo >>> 24;
	buffer[offset + 5] = uint64.lo >>> 16 & 0xFF;
	buffer[offset + 6] = uint64.lo >>> 8 & 0xFF;
	buffer[offset + 7] = uint64.lo & 0xFF;
}

module.exports.int32Buffer2Bytes = function(b) {
	var buffer = new Array(b.length);
	var len = b.length;
	var i = 0;
	while (i < len) {
		buffer[i * 4] = (b[i] & 0xFF000000) >>> 24;
		buffer[i * 4 + 1] = (b[i] & 0x00FF0000) >>> 16;
		buffer[i * 4 + 2] = (b[i] & 0x0000FF00) >>> 8;
		buffer[i * 4 + 3] = (b[i] & 0x000000FF);
		i++;
	}
	return buffer;
}
/*
module.exports.int64Buffer2Bytes = function(b) {
	var buffer = new Array(b.length);
	var i = 0;
	while (i < b.length) {
		buffer[i * 8] = (b[i].hi & 0xFF000000) >>> 24;
		buffer[i * 8 + 1] = (b[i].hi & 0x00FF0000) >>> 16;
		buffer[i * 8 + 2] = (b[i].hi & 0x0000FF00) >>> 8;
		buffer[i * 8 + 3] = (b[i].hi & 0x000000FF);
		buffer[i * 8 + 4] = (b[i].lo & 0xFF000000) >>> 24;
		buffer[i * 8 + 5] = (b[i].lo & 0x00FF0000) >>> 16;
		buffer[i * 8 + 6] = (b[i].lo & 0x0000FF00) >>> 8;
		buffer[i * 8 + 7] = (b[i].lo & 0x000000FF);
		i++;
	}
	return buffer;
}
*/

module.exports.string2Int32Buffer = function(s) {
	return this.bytes2Int32Buffer(this.string2bytes(s));
}

var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

module.exports.b64Encode = function(input) {
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;

	while (i < input.length) {

		chr1 = input[i++];
		chr2 = input[i++];
		chr3 = input[i++];

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		}
		else if (isNaN(chr3)) {
			enc4 = 64;
		}

		output +=
			keyStr.charAt(enc1) + keyStr.charAt(enc2) +
			keyStr.charAt(enc3) + keyStr.charAt(enc4);
	}

	return output;
};

module.exports.b64Decode = function(input) {
	var output = [];
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;

	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	while (i < input.length) {

		enc1 = keyStr.indexOf(input.charAt(i++));
		enc2 = keyStr.indexOf(input.charAt(i++));
		enc3 = keyStr.indexOf(input.charAt(i++));
		enc4 = keyStr.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		output.push(chr1);

		if (enc3 != 64) {
			output.push(chr2);
		}
		if (enc4 != 64) {
			output.push(chr3);
		}
	}
	return output;
};
},{"./op.js":6}],4:[function(require,module,exports){
/////////////////////////////////////
///////////////  Jh /////////////////
/////////////////////////////////////

var op = require('./op');
var he = require('./helper');

var Jh_BlockSize = 64;
var Jh_StateSize = 32;

var JH_HX = 8;
var JH_HY = 4;

var IV512 = he.bytes2Int32Buffer(he.b64Decode("b9FLlj4Aqhdjai4FehXVQ4oiXo0Ml+8L6TQSWfKzw2GJHaDBU2+AHiqpBWvqK22AWI7M2yB1uqapDzp2uvg79wFp5gVB40ppRrWKji5v5loQR6fQwYQ8JDtucbEtWsGZz1f27J2x+FanBoh8VxaxVuPC/N/mhRf7VFpGeMyM3Us="));

var C = he.bytes2Int32Buffer(he.b64Decode("ot7Vcmf4Fd8KFYR7VxUjt5DWq4H2h1pNxU+fTkAr0cPgOpjqnPpFXJnSxQOambJmtJYCZopTu/IaFFa1MaLbiFxaowPbDhmaCrI/QBBEwYeAGQUcHZWehK3rM2/czedekhO6EEFrvwIVZXjc0Ce79zmBLApQeKo30r8aP9ORAEENWi1CkH7M9pyfYt3Ol8CSC6dcGKxEK8fWZd/RI/zGYwNsbpcauOCefkUFIajsbES7A/Hu+mGOXbKXlv2XgYOUN4WOSi8wA9stjWcqlWqf+4Fz/opsabj4RnLHihRCf8CPFfTFxF7HvadvRHWAuxGPt3XeUryI5K4eALiC9KOmmDOP9I4VY6OpJFZfqon5t9Ug7fG2/eBafFrpyjY2LEIGQzUpzj2Y/k50+TpTp0uac1kf9dCGgU5vga2dDp9a2K9nBgWnamI07r4oC4snF7luJgd0Rz8QgMZvfqDge0h+xqUKVQ3ApPhKn+fjkZ7xjpeBcnaG1I1gUEFann5isOXz7B+f/HogVEAAGuTjhMn0zvWU10/YlfqdEX4uVaVUwyQoct9bKG7+veJ/9XiyxKUP73yJBS7TSe6Fk35Ef1ko6zdpX3BKMSSz8SiGXmXk1h0EdxvH5yC5UehD/nSKh9Qjo+gpffKUdpIJesvdwdkwm/swGx3gG9xbT0kk2r+CnPIxuuek/79wtAVEMg1IvPjeMvyuOznTu1PBw59FoIsp4P0FyeUPCa73EjRwlDTxkEIBt3Gile1E4zaOO+lKmC9PYx1AiBX2bKBLRMFH/69Sh/FKu34wxgrixbZwRuaMbsxWpNWkAMpPvUuEndquGD7IRc5Xc63RZDBozqboZyVcFPKM2qMW4Q7LWAbpM5qZlJogsmAfe4Rvwn+sztEYhdGgoVtZMtMZ3Y3AHJpQRrSlqmdjPZ+6awTkqxnK9n7uVgvqebEfdCEoqTX3venuUTY7WqxXHXbTUHX+wkY6AXB9o6/BNfdC2KSYIOzteHlna54VY4NBqNs66k07w/qDLIMyHztAp/NHJxw08EBZmnYtt2xOPuf9TyHSOY39uO9ZV9xJDJuN2utJK0nXolsNcPNo0K47fYRVjXrw6aX1ZY745PSiuKBTOxA2ngeoDFrsPnWSlGiRT4joVlVcsFtMvLr4mTu743uUh/PW9Np1XRxrciisrmRtszTcUKU0bHHbKLjy4mH4KlGNEDNk2+P8dd1Z8bysHKI/zkM80btnsEPoAspbCjN1oSmITRk0f1xTFrTDlDuSHk15Dtd1dHk/r+6299So6iE5Gr4JfvRcUScjTFMkoybSPDK6ShejRK3Vpm2mPh21CMnyr5g9WYNWPGuRoXz4TE1ghnLMPuJG9sduCLMzmC9edryxpWbWKyrmxO/otvQGNtTBvhWC7nRjIe+8DU7B/WnJU/TEWn2nJlhYBhYUwX4W+uAGPa+Qfj+dYyjj8snSDNKbADDOql8wDNS3FlEqdJgy4PLYMOsNmvjO43uexUuSefG1buZR/9NohgRXTSObMWeW5vOm5swFdQoX2YF2sc5sMhOEUhc8YqIF+LPLK/RHFUd4glRG/0hqkyMHWN84ZWVeTol8/PKOUIb8RC5wMYbKC9CiCUDwTkd4MDnuoGWDOPfRN+le9706LOQmspchb/gTAdHtRKPn3p/vFd+gi9mSJXb294U8vkLcEnzsp9h+sCer2n2NU96oPqqTziWq2GkCvf1D9lr5CHMa2u9fwKUZShczZk2XaiH9TDGYtDVwFUHbuw8e6ptUze2hY9CackCXUb+ddfbib0eR"));

// var IV512 = [
//   (0x6fd14b96), (0x3e00aa17), (0x636a2e05), (0x7a15d543),
//   (0x8a225e8d), (0x0c97ef0b), (0xe9341259), (0xf2b3c361),
//   (0x891da0c1), (0x536f801e), (0x2aa9056b), (0xea2b6d80),
//   (0x588eccdb), (0x2075baa6), (0xa90f3a76), (0xbaf83bf7),
//   (0x0169e605), (0x41e34a69), (0x46b58a8e), (0x2e6fe65a),
//   (0x1047a7d0), (0xc1843c24), (0x3b6e71b1), (0x2d5ac199),
//   (0xcf57f6ec), (0x9db1f856), (0xa706887c), (0x5716b156),
//   (0xe3c2fcdf), (0xe68517fb), (0x545a4678), (0xcc8cdd4b)
// ];

//C would need to be 32 bit swapped if using these values
// var C = [
//   (0x72d5dea2), (0xdf15f867), (0x7b84150a),
//   (0xb7231557), (0x81abd690), (0x4d5a87f6),
//   (0x4e9f4fc5), (0xc3d12b40), (0xea983ae0),
//   (0x5c45fa9c), (0x03c5d299), (0x66b2999a),
//   (0x660296b4), (0xf2bb538a), (0xb556141a),
//   (0x88dba231), (0x03a35a5c), (0x9a190edb),
//   (0x403fb20a), (0x87c14410), (0x1c051980),
//   (0x849e951d), (0x6f33ebad), (0x5ee7cddc),
//   (0x10ba1392), (0x02bf6b41), (0xdc786515),
//   (0xf7bb27d0), (0x0a2c8139), (0x37aa7850),
//   (0x3f1abfd2), (0x410091d3), (0x422d5a0d),
//   (0xf6cc7e90), (0xdd629f9c), (0x92c097ce),
//   (0x185ca70b), (0xc72b44ac), (0xd1df65d6),
//   (0x63c6fc23), (0x976e6c03), (0x9ee0b81a),
//   (0x2105457e), (0x446ceca8), (0xeef103bb),
//   (0x5d8e61fa), (0xfd9697b2), (0x94838197),
//   (0x4a8e8537), (0xdb03302f), (0x2a678d2d),
//   (0xfb9f6a95), (0x8afe7381), (0xf8b8696c),
//   (0x8ac77246), (0xc07f4214), (0xc5f4158f),
//   (0xbdc75ec4), (0x75446fa7), (0x8f11bb80),
//   (0x52de75b7), (0xaee488bc), (0x82b8001e),
//   (0x98a6a3f4), (0x8ef48f33), (0xa9a36315),
//   (0xaa5f5624), (0xd5b7f989), (0xb6f1ed20),
//   (0x7c5ae0fd), (0x36cae95a), (0x06422c36),
//   (0xce293543), (0x4efe983d), (0x533af974),
//   (0x739a4ba7), (0xd0f51f59), (0x6f4e8186),
//   (0x0e9dad81), (0xafd85a9f), (0xa7050667),
//   (0xee34626a), (0x8b0b28be), (0x6eb91727),
//   (0x47740726), (0xc680103f), (0xe0a07e6f),
//   (0xc67e487b), (0x0d550aa5), (0x4af8a4c0),
//   (0x91e3e79f), (0x978ef19e), (0x86767281),
//   (0x50608dd4), (0x7e9e5a41), (0xf3e5b062),
//   (0xfc9f1fec), (0x4054207a), (0xe3e41a00),
//   (0xcef4c984), (0x4fd794f5), (0x9dfa95d8),
//   (0x552e7e11), (0x24c354a5), (0x5bdf7228),
//   (0xbdfe6e28), (0x78f57fe2), (0x0fa5c4b2),
//   (0x05897cef), (0xee49d32e), (0x447e9385),
//   (0xeb28597f), (0x705f6937), (0xb324314a),
//   (0x5e8628f1), (0x1dd6e465), (0xc71b7704),
//   (0x51b920e7), (0x74fe43e8), (0x23d4878a),
//   (0x7d29e8a3), (0x927694f2), (0xddcb7a09),
//   (0x9b30d9c1), (0x1d1b30fb), (0x5bdc1be0),
//   (0xda24494f), (0xf29c82bf), (0xa4e7ba31),
//   (0xb470bfff), (0x0d324405), (0xdef8bc48),
//   (0x3baefc32), (0x53bbd339), (0x459fc3c1),
//   (0xe0298ba0), (0xe5c905fd), (0xf7ae090f),
//   (0x94703412), (0x4290f134), (0xa271b701),
//   (0xe344ed95), (0xe93b8e36), (0x4f2f984a),
//   (0x88401d63), (0xa06cf615), (0x47c1444b),
//   (0x8752afff), (0x7ebb4af1), (0xe20ac630),
//   (0x4670b6c5), (0xcc6e8ce6), (0xa4d5a456),
//   (0xbd4fca00), (0xda9d844b), (0xc83e18ae),
//   (0x7357ce45), (0x3064d1ad), (0xe8a6ce68),
//   (0x145c2567), (0xa3da8cf2), (0xcb0ee116),
//   (0x33e90658), (0x9a94999a), (0x1f60b220),
//   (0xc26f847b), (0xd1ceac7f), (0xa0d18518),
//   (0x32595ba1), (0x8ddd19d3), (0x509a1cc0),
//   (0xaaa5b446), (0x9f3d6367), (0xe4046bba),
//   (0xf6ca19ab), (0x0b56ee7e), (0x1fb179ea),
//   (0xa9282174), (0xe9bdf735), (0x3b3651ee),
//   (0x1d57ac5a), (0x7550d376), (0x3a46c2fe),
//   (0xa37d7001), (0xf735c1af), (0x98a4d842),
//   (0x78edec20), (0x9e6b6779), (0x41836315),
//   (0xea3adba8), (0xfac33b4d), (0x32832c83),
//   (0xa7403b1f), (0x1c2747f3), (0x5940f034),
//   (0xb72d769a), (0xe73e4e6c), (0xd2214ffd),
//   (0xb8fd8d39), (0xdc5759ef), (0x8d9b0c49),
//   (0x2b49ebda), (0x5ba2d749), (0x68f3700d),
//   (0x7d3baed0), (0x7a8d5584), (0xf5a5e9f0),
//   (0xe4f88e65), (0xa0b8a2f4), (0x36103b53),
//   (0x0ca8079e), (0x753eec5a), (0x91689492),
//   (0x56e8884f), (0x5bb05c55), (0xf8babc4c),
//   (0xe3bb3b99), (0xf387947b), (0x75daf4d6),
//   (0x726b1c5d), (0x64aeac28), (0xdc34b36d),
//   (0x6c34a550), (0xb828db71), (0xf861e2f2),
//   (0x108d512a), (0xe3db6433), (0x59dd75fc),
//   (0x1cacbcf1), (0x43ce3fa2), (0x67bbd13c),
//   (0x02e843b0), (0x330a5bca), (0x8829a175),
//   (0x7f34194d), (0xb416535c), (0x923b94c3),
//   (0x0e794d1e), (0x797475d7), (0xb6eeaf3f),
//   (0xeaa8d4f7), (0xbe1a3921), (0x5cf47e09),
//   (0x4c232751), (0x26a32453), (0xba323cd2),
//   (0x44a3174a), (0x6da6d5ad), (0xb51d3ea6),
//   (0xaff2c908), (0x83593d98), (0x916b3c56),
//   (0x4cf87ca1), (0x7286604d), (0x46e23ecc),
//   (0x086ec7f6), (0x2f9833b3), (0xb1bc765e),
//   (0x2bd666a5), (0xefc4e62a), (0x06f4b6e8),
//   (0xbec1d436), (0x74ee8215), (0xbcef2163),
//   (0xfdc14e0d), (0xf453c969), (0xa77d5ac4),
//   (0x06585826), (0x7ec11416), (0x06e0fa16),
//   (0x7e90af3d), (0x28639d3f), (0xd2c9f2e3),
//   (0x009bd20c), (0x5faace30), (0xb7d40c30),
//   (0x742a5116), (0xf2e03298), (0x0deb30d8),
//   (0xe3cef89a), (0x4bc59e7b), (0xb5f17992),
//   (0xff51e66e), (0x048668d3), (0x9b234d57),
//   (0xe6966731), (0xcce6a6f3), (0x170a7505),
//   (0xb17681d9), (0x13326cce), (0x3c175284),
//   (0xf805a262), (0xf42bcbb3), (0x78471547),
//   (0xff465482), (0x23936a48), (0x38df5807),
//   (0x4e5e6565), (0xf2fc7c89), (0xfc86508e),
//   (0x31702e44), (0xd00bca86), (0xf04009a2),
//   (0x3078474e), (0x65a0ee39), (0xd1f73883),
//   (0xf75ee937), (0xe42c3abd), (0x2197b226),
//   (0x0113f86f), (0xa344edd1), (0xef9fdee7),
//   (0x8ba0df15), (0x762592d9), (0x3c85f7f6),
//   (0x12dc42be), (0xd8a7ec7c), (0xab27b07e),
//   (0x538d7dda), (0xaa3ea8de), (0xaa25ce93),
//   (0xbd0269d8), (0x5af643fd), (0x1a7308f9),
//   (0xc05fefda), (0x174a19a5), (0x974d6633),
//   (0x4cfd216a), (0x35b49831), (0xdb411570),
//   (0xea1e0fbb), (0xedcd549b), (0x9ad063a1),
//   (0x51974072), (0xf6759dbf), (0x91476fe2)
// ];

var Sb = function(x, c) {
  x[3] = ~x[3];
  x[0] ^= (c) & ~x[2];
  var tmp = (c) ^ (x[0] & x[1]);
  x[0] ^= x[2] & x[3];
  x[3] ^= ~x[1] & x[2];
  x[1] ^= x[0] & x[2];
  x[2] ^= x[0] & ~x[3];
  x[0] ^= x[1] | x[3];
  x[3] ^= x[1] & x[2];
  x[1] ^= tmp & x[0];
  x[2] ^= tmp;
  return x;
}

var Lb = function(x) {
  x[4] ^= x[1];
  x[5] ^= x[2];
  x[6] ^= x[3] ^ x[0];
  x[7] ^= x[0];
  x[0] ^= x[5];
  x[1] ^= x[6];
  x[2] ^= x[7] ^ x[4];
  x[3] ^= x[4];
  return x;
}

var Ceven = function(n, r) {
  return C[((r) << 3) + 3 - n];
}

var Codd = function(n, r) {
  return C[((r) << 3) + 7 - n];
}

var S = function(x0, x1, x2, x3, cb, r) {
  var x = Sb([x0[3], x1[3], x2[3], x3[3]], cb(3, r));
  x0[3] = x[0];
  x1[3] = x[1];
  x2[3] = x[2];
  x3[3] = x[3];
  x = Sb([x0[2], x1[2], x2[2], x3[2]], cb(2, r));
  x0[2] = x[0];
  x1[2] = x[1];
  x2[2] = x[2];
  x3[2] = x[3];
  x = Sb([x0[1], x1[1], x2[1], x3[1]], cb(1, r));
  x0[1] = x[0];
  x1[1] = x[1];
  x2[1] = x[2];
  x3[1] = x[3];
  x = Sb([x0[0], x1[0], x2[0], x3[0]], cb(0, r));
  x0[0] = x[0];
  x1[0] = x[1];
  x2[0] = x[2];
  x3[0] = x[3];
}

var L = function(x0, x1, x2, x3, x4, x5, x6, x7) {
  var x = Lb([x0[3], x1[3], x2[3], x3[3], x4[3], x5[3], x6[3], x7[3]]);
  x0[3] = x[0];
  x1[3] = x[1];
  x2[3] = x[2];
  x3[3] = x[3];
  x4[3] = x[4];
  x5[3] = x[5];
  x6[3] = x[6];
  x7[3] = x[7];
  x = Lb([x0[2], x1[2], x2[2], x3[2], x4[2], x5[2], x6[2], x7[2]]);
  x0[2] = x[0];
  x1[2] = x[1];
  x2[2] = x[2];
  x3[2] = x[3];
  x4[2] = x[4];
  x5[2] = x[5];
  x6[2] = x[6];
  x7[2] = x[7];
  x = Lb([x0[1], x1[1], x2[1], x3[1], x4[1], x5[1], x6[1], x7[1]]);
  x0[1] = x[0];
  x1[1] = x[1];
  x2[1] = x[2];
  x3[1] = x[3];
  x4[1] = x[4];
  x5[1] = x[5];
  x6[1] = x[6];
  x7[1] = x[7];
  x = Lb([x0[0], x1[0], x2[0], x3[0], x4[0], x5[0], x6[0], x7[0]]);
  x0[0] = x[0];
  x1[0] = x[1];
  x2[0] = x[2];
  x3[0] = x[3];
  x4[0] = x[4];
  x5[0] = x[5];
  x6[0] = x[6];
  x7[0] = x[7];
}

var Wz = function(x, c, n) {
  var t = (x[3] & (c)) << (n);
  x[3] = ((x[3] >> (n)) & (c)) | t;
  t = (x[2] & (c)) << (n);
  x[2] = ((x[2] >> (n)) & (c)) | t;
  t = (x[1] & (c)) << (n);
  x[1] = ((x[1] >> (n)) & (c)) | t;
  t = (x[0] & (c)) << (n);
  x[0] = ((x[0] >> (n)) & (c)) | t;
}

var W = function(ro, x) {
  switch (ro) {
    case 0:
      return Wz(x, (0x55555555), 1);
    case 1:
      return Wz(x, (0x33333333), 2);
    case 2:
      return Wz(x, (0x0F0F0F0F), 4);
    case 3:
      return Wz(x, (0x00FF00FF), 8);
    case 4:
      return Wz(x, (0x0000FFFF), 16);
    case 5:
      {
        var t = x[3];
        x[3] = x[2];
        x[2] = t;
        t = x[1];
        x[1] = x[0];
        x[0] = t;
        return;
      }
    case 6:
      {
        var t = x[3];
        x[3] = x[1];
        x[1] = t;
        t = x[2];
        x[2] = x[0];
        x[0] = t;
        return;
      }
  }
}

var SL = function(h, r, ro) {
  S(h[0], h[2], h[4], h[6], Ceven, r);
  S(h[1], h[3], h[5], h[7], Codd, r);
  L(h[0], h[2], h[4], h[6], h[1], h[3], h[5], h[7]);
  W(ro, h[1]);
  W(ro, h[3]);
  W(ro, h[5]);
  W(ro, h[7]);
}

var READ_STATE = function(h, state) {
  h[0][3] = state[0];
  h[0][2] = state[1];
  h[0][1] = state[2];
  h[0][0] = state[3];
  h[1][3] = state[4];
  h[1][2] = state[5];
  h[1][1] = state[6];
  h[1][0] = state[7];
  h[2][3] = state[8];
  h[2][2] = state[9];
  h[2][1] = state[10];
  h[2][0] = state[11];
  h[3][3] = state[12];
  h[3][2] = state[13];
  h[3][1] = state[14];
  h[3][0] = state[15];
  h[4][3] = state[16];
  h[4][2] = state[17];
  h[4][1] = state[18];
  h[4][0] = state[19];
  h[5][3] = state[20];
  h[5][2] = state[21];
  h[5][1] = state[22];
  h[5][0] = state[23];
  h[6][3] = state[24];
  h[6][2] = state[25];
  h[6][1] = state[26];
  h[6][0] = state[27];
  h[7][3] = state[28];
  h[7][2] = state[29];
  h[7][1] = state[30];
  h[7][0] = state[31];
}

var WRITE_STATE = function(h, state) {
  state[0] = h[0][3];
  state[1] = h[0][2];
  state[2] = h[0][1];
  state[3] = h[0][0];
  state[4] = h[1][3];
  state[5] = h[1][2];
  state[6] = h[1][1];
  state[7] = h[1][0];
  state[8] = h[2][3];
  state[9] = h[2][2];
  state[10] = h[2][1];
  state[11] = h[2][0];
  state[12] = h[3][3];
  state[13] = h[3][2];
  state[14] = h[3][1];
  state[15] = h[3][0];
  state[16] = h[4][3];
  state[17] = h[4][2];
  state[18] = h[4][1];
  state[19] = h[4][0];
  state[20] = h[5][3];
  state[21] = h[5][2];
  state[22] = h[5][1];
  state[23] = h[5][0];
  state[24] = h[6][3];
  state[25] = h[6][2];
  state[26] = h[6][1];
  state[27] = h[6][0];
  state[28] = h[7][3];
  state[29] = h[7][2];
  state[30] = h[7][1];
  state[31] = h[7][0];
}

var E8 = function(h) {
  for (var r = 0; r < 42; r += 7) {
    SL(h, r + 0, 0);
    SL(h, r + 1, 1);
    SL(h, r + 2, 2);
    SL(h, r + 3, 3);
    SL(h, r + 4, 4);
    SL(h, r + 5, 5);
    SL(h, r + 6, 6);
  }
}

var bufferXORInsertBackwards = function(buffer, data, x, y, bufferOffsetX, bufferOffsetY) {
  if (!bufferOffsetX) bufferOffsetX = 0;
  if (!bufferOffsetY) bufferOffsetY = 0;
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
      var m = i + bufferOffsetX;
      var n = bufferOffsetY + y - 1 - j;
      var xOr = buffer[m][n] ^ data[i * 4 + j];
      buffer[m][n] = xOr;
    }
  }
}

var jh = function(ctx, data, len) {
  var buf, ptr;
  //create a local copy of states
  buf = ctx.buffer;
  ptr = ctx.ptr;
  if (!len) len = data.length;
  if (len < ctx.buffer.length - ptr) {
    op.bufferInsert(buf, ptr, data, data.length);
    ptr += data.length;
    ctx.ptr = ptr;
    return;
  }
  var V = new Array(JH_HX);
  for (var i = 0; i < JH_HX; i++) {
    V[i] = new Array(JH_HY);
  }
  READ_STATE(V, ctx.state);
  while (len > 0) {
    var clen = ctx.buffer.length - ptr;
    if (clen > len) clen = len;
    op.bufferInsert(buf, ptr, data, clen);
    ptr += clen;
    data = data.slice(clen);
    len -= clen;
    if (ptr === ctx.buffer.length) {
      var int32Buf = op.swap32Array(he.bytes2Int32Buffer(buf));

      bufferXORInsertBackwards(V, int32Buf, 4, 4);
      E8(V);
      bufferXORInsertBackwards(V, int32Buf, 4, 4, 4, 0);
      if ((ctx.blockCountLow = op.t32(ctx.blockCountLow + 1)) == 0)
        ctx.blockCountHigh++;
      ptr = 0;
    }
  }
  WRITE_STATE(V, ctx.state);
  ctx.ptr = ptr;
}

var jhClose = function(ctx) {
  var z;
  var buf = new Array(128);
  var numz, u;
  var l = new Array(4);
  buf[0] = 0x80;
  if (ctx.ptr == 0) {
    numz = 47;
  }
  else {
    numz = 111 - ctx.ptr;
  }
  op.bufferSet(buf, 1, 0, numz);
  l[0] = op.t32(ctx.blockCountLow << 9) + (ctx.ptr << 3);
  l[1] = op.t32(ctx.blockCountLow >> 23) + op.t32(ctx.blockCountHigh << 9);
  l[2] = op.t32(ctx.blockCountHigh >> 23);
  l[3] = 0;
  var lBytes = he.int32Buffer2Bytes(op.swap32Array(l));
  op.bufferInsertBackwards(buf, 1 + numz, lBytes, 16);
  jh(ctx, buf, numz + 17);
  var out = new Array(16);
  for (u = 0; u < 16; u++)
    out[u] = op.swap32(ctx.state[u + 16]);
  return out;
}

module.exports = function(input, format, output) {
  var msg;
  if (format === 1) {
    msg = input;
  }
  else if (format === 2) {
    msg = he.int32Buffer2Bytes(input);
  }
  else {
    msg = he.string2bytes(input);
  }
  var ctx = {};
  ctx.state = op.swap32Array(IV512);
  ctx.ptr = 0;
  ctx.buffer = new Array(Jh_BlockSize);
  ctx.blockCountHigh = 0;
  ctx.blockCountLow = 0;
  jh(ctx, msg);
  var r = jhClose(ctx);
  var out;
  if (output === 2) {
    out = r;
  }
  else if (output === 1) {
    out = he.int32Buffer2Bytes(r)
  }
  else {
    out = he.int32ArrayToHexString(r)
  }
  return out;
}

},{"./helper":3,"./op":6}],5:[function(require,module,exports){
// Keccak

var HEX_CHARS = '0123456789abcdef'.split('');
var KECCAK_PADDING = [1, 256, 65536, 16777216];
var SHIFT = [0, 8, 16, 24];
var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
  0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
  2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
  2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
  2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648
];
var BITS = [512];
var OUTPUT_TYPES = ['hex', 'buffer', 'array'];

var h = require('./helper');

var createOutputMethod = function(bits, padding, outputType) {
  return function(message) {
    return new Keccak(bits, padding, bits).update(message)[outputType]();
  }
};

var createShakeOutputMethod = function(bits, padding, outputType) {
  return function(message, outputBits) {
    return new Keccak(bits, padding, outputBits).update(message)[outputType]();
  }
};

var createMethod = function(bits, padding) {
  var method = createOutputMethod(bits, padding, 'array');
  method.create = function() {
    return new Keccak(bits, padding, bits);
  };
  method.update = function(message) {
    return method.create().update(message);
  };
  for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
    var type = OUTPUT_TYPES[i];
    method[type] = createOutputMethod(bits, padding, type);
  }
  return method;
};

var algorithms = [{
  name: 'keccak',
  padding: KECCAK_PADDING,
  bits: BITS,
  createMethod: createMethod
}];

var methods = {};

for (var i = 0; i < algorithms.length; ++i) {
  var algorithm = algorithms[i];
  var bits = algorithm.bits;
  var createMethod = algorithm.createMethod;
  for (var j = 0; j < bits.length; ++j) {
    var method = algorithm.createMethod(bits[j], algorithm.padding);
    methods[algorithm.name + '_' + bits[j]] = method;
  }
}

function Keccak(bits, padding, outputBits) {
  this.blocks = [];
  this.s = [];
  this.padding = padding;
  this.outputBits = outputBits;
  this.reset = true;
  this.block = 0;
  this.start = 0;
  this.blockCount = (1600 - (bits << 1)) >> 5;
  this.byteCount = this.blockCount << 2;
  this.outputBlocks = outputBits >> 5;
  this.extraBytes = (outputBits & 31) >> 3;

  for (var i = 0; i < 50; ++i) {
    this.s[i] = 0;
  }
};

Keccak.prototype.update = function(message) {
  var notString = typeof(message) != 'string';
  if (notString && Object.prototype.toString.call(message.constructor) === "[object ArrayBuffer]") {
    message = h.string2bytes(message);
  }
  var length = message.length,
    blocks = this.blocks,
    byteCount = this.byteCount,
    blockCount = this.blockCount,
    index = 0,
    s = this.s,
    i, code;

  while (index < length) {
    if (this.reset) {
      this.reset = false;
      blocks[0] = this.block;
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    if (notString) {
      for (i = this.start; index < length && i < byteCount; ++index) {
        blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
      }
    }
    else {
      for (i = this.start; index < length && i < byteCount; ++index) {
        code = message.charCodeAt(index);
        if (code < 0x80) {
          blocks[i >> 2] |= code << SHIFT[i++ & 3];
        }
        else if (code < 0x800) {
          blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
        }
        else if (code < 0xd800 || code >= 0xe000) {
          blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
        }
        else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
          blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
        }
      }
    }
    this.lastByteIndex = i;
    if (i >= byteCount) {
      this.start = i - byteCount;
      this.block = blocks[blockCount];
      for (i = 0; i < blockCount; ++i) {
        s[i] ^= blocks[i];
      }
      f(s);
      this.reset = true;
    }
    else {
      this.start = i;
    }
  }
  return this;
};

Keccak.prototype.finalize = function() {
  var blocks = this.blocks,
    i = this.lastByteIndex,
    blockCount = this.blockCount,
    s = this.s;
  blocks[i >> 2] |= this.padding[i & 3];
  if (this.lastByteIndex == this.byteCount) {
    blocks[0] = blocks[blockCount];
    for (i = 1; i < blockCount + 1; ++i) {
      blocks[i] = 0;
    }
  }
  blocks[blockCount - 1] |= 0x80000000;
  for (i = 0; i < blockCount; ++i) {
    s[i] ^= blocks[i];
  }
  f(s);
};

Keccak.prototype.toString = Keccak.prototype.hex = function() {
  this.finalize();

  var blockCount = this.blockCount,
    s = this.s,
    outputBlocks = this.outputBlocks,
    extraBytes = this.extraBytes,
    i = 0,
    j = 0;
  var hex = '',
    block;
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
        HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
        HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
        HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
    }
    if (j % blockCount == 0) {
      f(s);
      i = 0;
    }
  }
  if (extraBytes) {
    block = s[i];
    if (extraBytes > 0) {
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
    }
    if (extraBytes > 1) {
      hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
    }
    if (extraBytes > 2) {
      hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
    }
  }
  return hex;
};

Keccak.prototype.buffer = function() {
  this.finalize();

  var blockCount = this.blockCount,
    s = this.s,
    outputBlocks = this.outputBlocks,
    extraBytes = this.extraBytes,
    i = 0,
    j = 0;
  var bytes = this.outputBits >> 3;
  var buffer;
  if (extraBytes) {
    buffer = new ArrayBuffer((outputBlocks + 1) << 2);
  }
  else {
    buffer = new ArrayBuffer(bytes);
  }
  var array = new Uint32Array(buffer);
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      array[j] = s[i];
    }
    if (j % blockCount == 0) {
      f(s);
    }
  }
  if (extraBytes) {
    array[i] = s[i];
    buffer = buffer.slice(0, bytes);
  }
  return buffer;
};

Keccak.prototype.digest = Keccak.prototype.array = function() {
  this.finalize();

  var blockCount = this.blockCount,
    s = this.s,
    outputBlocks = this.outputBlocks,
    extraBytes = this.extraBytes,
    i = 0,
    j = 0;
  var array = [],
    offset, block;
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      array[offset + 1] = (block >> 8) & 0xFF;
      array[offset + 2] = (block >> 16) & 0xFF;
      array[offset + 3] = (block >> 24) & 0xFF;
    }
    if (j % blockCount == 0) {
      f(s);
    }
  }
  if (extraBytes) {
    offset = j << 2;
    block = s[i];
    if (extraBytes > 0) {
      array[offset] = block & 0xFF;
    }
    if (extraBytes > 1) {
      array[offset + 1] = (block >> 8) & 0xFF;
    }
    if (extraBytes > 2) {
      array[offset + 2] = (block >> 16) & 0xFF;
    }
  }
  return array;
};

var f = function(s) {
  var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
    b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
    b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
    b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
  for (n = 0; n < 48; n += 2) {
    c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
    c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
    c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
    c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
    c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
    c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
    c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
    c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
    c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
    c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

    h = c8 ^ ((c2 << 1) | (c3 >>> 31));
    l = c9 ^ ((c3 << 1) | (c2 >>> 31));
    s[0] ^= h;
    s[1] ^= l;
    s[10] ^= h;
    s[11] ^= l;
    s[20] ^= h;
    s[21] ^= l;
    s[30] ^= h;
    s[31] ^= l;
    s[40] ^= h;
    s[41] ^= l;
    h = c0 ^ ((c4 << 1) | (c5 >>> 31));
    l = c1 ^ ((c5 << 1) | (c4 >>> 31));
    s[2] ^= h;
    s[3] ^= l;
    s[12] ^= h;
    s[13] ^= l;
    s[22] ^= h;
    s[23] ^= l;
    s[32] ^= h;
    s[33] ^= l;
    s[42] ^= h;
    s[43] ^= l;
    h = c2 ^ ((c6 << 1) | (c7 >>> 31));
    l = c3 ^ ((c7 << 1) | (c6 >>> 31));
    s[4] ^= h;
    s[5] ^= l;
    s[14] ^= h;
    s[15] ^= l;
    s[24] ^= h;
    s[25] ^= l;
    s[34] ^= h;
    s[35] ^= l;
    s[44] ^= h;
    s[45] ^= l;
    h = c4 ^ ((c8 << 1) | (c9 >>> 31));
    l = c5 ^ ((c9 << 1) | (c8 >>> 31));
    s[6] ^= h;
    s[7] ^= l;
    s[16] ^= h;
    s[17] ^= l;
    s[26] ^= h;
    s[27] ^= l;
    s[36] ^= h;
    s[37] ^= l;
    s[46] ^= h;
    s[47] ^= l;
    h = c6 ^ ((c0 << 1) | (c1 >>> 31));
    l = c7 ^ ((c1 << 1) | (c0 >>> 31));
    s[8] ^= h;
    s[9] ^= l;
    s[18] ^= h;
    s[19] ^= l;
    s[28] ^= h;
    s[29] ^= l;
    s[38] ^= h;
    s[39] ^= l;
    s[48] ^= h;
    s[49] ^= l;

    b0 = s[0];
    b1 = s[1];
    b32 = (s[11] << 4) | (s[10] >>> 28);
    b33 = (s[10] << 4) | (s[11] >>> 28);
    b14 = (s[20] << 3) | (s[21] >>> 29);
    b15 = (s[21] << 3) | (s[20] >>> 29);
    b46 = (s[31] << 9) | (s[30] >>> 23);
    b47 = (s[30] << 9) | (s[31] >>> 23);
    b28 = (s[40] << 18) | (s[41] >>> 14);
    b29 = (s[41] << 18) | (s[40] >>> 14);
    b20 = (s[2] << 1) | (s[3] >>> 31);
    b21 = (s[3] << 1) | (s[2] >>> 31);
    b2 = (s[13] << 12) | (s[12] >>> 20);
    b3 = (s[12] << 12) | (s[13] >>> 20);
    b34 = (s[22] << 10) | (s[23] >>> 22);
    b35 = (s[23] << 10) | (s[22] >>> 22);
    b16 = (s[33] << 13) | (s[32] >>> 19);
    b17 = (s[32] << 13) | (s[33] >>> 19);
    b48 = (s[42] << 2) | (s[43] >>> 30);
    b49 = (s[43] << 2) | (s[42] >>> 30);
    b40 = (s[5] << 30) | (s[4] >>> 2);
    b41 = (s[4] << 30) | (s[5] >>> 2);
    b22 = (s[14] << 6) | (s[15] >>> 26);
    b23 = (s[15] << 6) | (s[14] >>> 26);
    b4 = (s[25] << 11) | (s[24] >>> 21);
    b5 = (s[24] << 11) | (s[25] >>> 21);
    b36 = (s[34] << 15) | (s[35] >>> 17);
    b37 = (s[35] << 15) | (s[34] >>> 17);
    b18 = (s[45] << 29) | (s[44] >>> 3);
    b19 = (s[44] << 29) | (s[45] >>> 3);
    b10 = (s[6] << 28) | (s[7] >>> 4);
    b11 = (s[7] << 28) | (s[6] >>> 4);
    b42 = (s[17] << 23) | (s[16] >>> 9);
    b43 = (s[16] << 23) | (s[17] >>> 9);
    b24 = (s[26] << 25) | (s[27] >>> 7);
    b25 = (s[27] << 25) | (s[26] >>> 7);
    b6 = (s[36] << 21) | (s[37] >>> 11);
    b7 = (s[37] << 21) | (s[36] >>> 11);
    b38 = (s[47] << 24) | (s[46] >>> 8);
    b39 = (s[46] << 24) | (s[47] >>> 8);
    b30 = (s[8] << 27) | (s[9] >>> 5);
    b31 = (s[9] << 27) | (s[8] >>> 5);
    b12 = (s[18] << 20) | (s[19] >>> 12);
    b13 = (s[19] << 20) | (s[18] >>> 12);
    b44 = (s[29] << 7) | (s[28] >>> 25);
    b45 = (s[28] << 7) | (s[29] >>> 25);
    b26 = (s[38] << 8) | (s[39] >>> 24);
    b27 = (s[39] << 8) | (s[38] >>> 24);
    b8 = (s[48] << 14) | (s[49] >>> 18);
    b9 = (s[49] << 14) | (s[48] >>> 18);

    s[0] = b0 ^ (~b2 & b4);
    s[1] = b1 ^ (~b3 & b5);
    s[10] = b10 ^ (~b12 & b14);
    s[11] = b11 ^ (~b13 & b15);
    s[20] = b20 ^ (~b22 & b24);
    s[21] = b21 ^ (~b23 & b25);
    s[30] = b30 ^ (~b32 & b34);
    s[31] = b31 ^ (~b33 & b35);
    s[40] = b40 ^ (~b42 & b44);
    s[41] = b41 ^ (~b43 & b45);
    s[2] = b2 ^ (~b4 & b6);
    s[3] = b3 ^ (~b5 & b7);
    s[12] = b12 ^ (~b14 & b16);
    s[13] = b13 ^ (~b15 & b17);
    s[22] = b22 ^ (~b24 & b26);
    s[23] = b23 ^ (~b25 & b27);
    s[32] = b32 ^ (~b34 & b36);
    s[33] = b33 ^ (~b35 & b37);
    s[42] = b42 ^ (~b44 & b46);
    s[43] = b43 ^ (~b45 & b47);
    s[4] = b4 ^ (~b6 & b8);
    s[5] = b5 ^ (~b7 & b9);
    s[14] = b14 ^ (~b16 & b18);
    s[15] = b15 ^ (~b17 & b19);
    s[24] = b24 ^ (~b26 & b28);
    s[25] = b25 ^ (~b27 & b29);
    s[34] = b34 ^ (~b36 & b38);
    s[35] = b35 ^ (~b37 & b39);
    s[44] = b44 ^ (~b46 & b48);
    s[45] = b45 ^ (~b47 & b49);
    s[6] = b6 ^ (~b8 & b0);
    s[7] = b7 ^ (~b9 & b1);
    s[16] = b16 ^ (~b18 & b10);
    s[17] = b17 ^ (~b19 & b11);
    s[26] = b26 ^ (~b28 & b20);
    s[27] = b27 ^ (~b29 & b21);
    s[36] = b36 ^ (~b38 & b30);
    s[37] = b37 ^ (~b39 & b31);
    s[46] = b46 ^ (~b48 & b40);
    s[47] = b47 ^ (~b49 & b41);
    s[8] = b8 ^ (~b0 & b2);
    s[9] = b9 ^ (~b1 & b3);
    s[18] = b18 ^ (~b10 & b12);
    s[19] = b19 ^ (~b11 & b13);
    s[28] = b28 ^ (~b20 & b22);
    s[29] = b29 ^ (~b21 & b23);
    s[38] = b38 ^ (~b30 & b32);
    s[39] = b39 ^ (~b31 & b33);
    s[48] = b48 ^ (~b40 & b42);
    s[49] = b49 ^ (~b41 & b43);

    s[0] ^= RC[n];
    s[1] ^= RC[n + 1];
  }
}
module.exports = methods;
//   if (!root.JS_SHA3_TEST && NODE_JS) {
//     module.exports = methods;
//   } else if (root) {
//     for (var key in methods) {
//       root[key] = methods[key];
//     }
//   }

// module.exports = function(input, format, output) {
//   var msg = input;
//   if (format === 1) {
//     msg = input;
//   }
//   else if (format === 2) {
//     msg = h.int32Buffer2Bytes(input);
//   }
//   else {
//     msg = h.string2bytes(input);
//   }
//   var ctx = {};
//   if (output === 1) {
//     return h.bytes2Int32Buffer(new Keccak().update(msg).array());
//   }
//   else if (output === 2) {
//     return new Keccak().update(msg).array();
//   }
//   else {
//     return new Keccak().update(msg).hex();
//   }
// }

},{"./helper":3}],6:[function(require,module,exports){
'use strict';
//the right shift is important, it has to do with 32 bit operations in javascript, it will make things faster
function u64(h, l) {
  this.hi = h >>> 0;
  this.lo = l >>> 0;
}

u64.prototype.set = function(oWord) {
  this.lo = oWord.lo;
  this.hi = oWord.hi;
}

u64.prototype.add = function(oWord) {
  var lowest, lowMid, highMid, highest; //four parts of the whole 64 bit number..

  //need to add the respective parts from each number and the carry if on is present..
  lowest = (this.lo & 0XFFFF) + (oWord.lo & 0XFFFF);
  lowMid = (this.lo >>> 16) + (oWord.lo >>> 16) + (lowest >>> 16);
  highMid = (this.hi & 0XFFFF) + (oWord.hi & 0XFFFF) + (lowMid >>> 16);
  highest = (this.hi >>> 16) + (oWord.hi >>> 16) + (highMid >>> 16);

  //now set the hgih and the low accordingly..
  this.lo = (lowMid << 16) | (lowest & 0XFFFF);
  this.hi = (highest << 16) | (highMid & 0XFFFF);

  return this; //for chaining..
};

u64.prototype.addOne = function() {
  if (this.lo === -1 || this.lo === 0xFFFFFFFF) {
    this.lo = 0;
    this.hi++;
  }
  else {
    this.lo++;
  }
}

u64.prototype.plus = function(oWord) {
  var c = new u64(0, 0);
  var lowest, lowMid, highMid, highest; //four parts of the whole 64 bit number..

  //need to add the respective parts from each number and the carry if on is present..
  lowest = (this.lo & 0XFFFF) + (oWord.lo & 0XFFFF);
  lowMid = (this.lo >>> 16) + (oWord.lo >>> 16) + (lowest >>> 16);
  highMid = (this.hi & 0XFFFF) + (oWord.hi & 0XFFFF) + (lowMid >>> 16);
  highest = (this.hi >>> 16) + (oWord.hi >>> 16) + (highMid >>> 16);

  //now set the hgih and the low accordingly..
  c.lo = (lowMid << 16) | (lowest & 0XFFFF);
  c.hi = (highest << 16) | (highMid & 0XFFFF);

  return c; //for chaining..
};

u64.prototype.not = function() {
  return new u64(~this.hi, ~this.lo);
}

u64.prototype.one = function() {
  return new u64(0x0, 0x1);
}

u64.prototype.zero = function() {
  return new u64(0x0, 0x0);
}

u64.prototype.neg = function() {
  return this.not().plus(this.one());
}

u64.prototype.minus = function(oWord) {
  return this.plus(oWord.neg());
};

u64.prototype.isZero = function() {
  return (this.lo === 0) && (this.hi === 0);
}

function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}

function fromNumber(value) {
  if (isNaN(value) || !isFinite(value))
    return this.zero();
  var pow32 = (1 << 32);
  return new u64((value % pow32) | 0, (value / pow32) | 0);
}

u64.prototype.multiply = function(multiplier) {
  if (this.isZero())
    return this.zero();
  if (!isLong(multiplier))
    multiplier = fromNumber(multiplier);
  if (multiplier.isZero())
    return this.zero();

  // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
  // We can skip products that would overflow.

  var a48 = this.hi >>> 16;
  var a32 = this.hi & 0xFFFF;
  var a16 = this.lo >>> 16;
  var a00 = this.lo & 0xFFFF;

  var b48 = multiplier.hi >>> 16;
  var b32 = multiplier.hi & 0xFFFF;
  var b16 = multiplier.lo >>> 16;
  var b00 = multiplier.lo & 0xFFFF;

  var c48 = 0,
    c32 = 0,
    c16 = 0,
    c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return new u64((c48 << 16) | c32, (c16 << 16) | c00);
};

u64.prototype.shiftLeft = function(bits) {
  bits = bits % 64;
  var c = new u64(0, 0);
  if (bits === 0) {
    return this.clone();
  }
  else if (bits > 31) {
    c.lo = 0;
    c.hi = this.lo << (bits - 32);
  }
  else {
    var toMoveUp = this.lo >>> 32 - bits;
    c.lo = this.lo << bits;
    c.hi = (this.hi << bits) | toMoveUp;
  }
  return c; //for chaining..
};

u64.prototype.setShiftLeft = function(bits) {
  if (bits === 0) {
    return this;
  }
  if (bits > 63) {
    bits = bits % 64;
  }
  
  if (bits > 31) {
    this.hi = this.lo << (bits - 32);
    this.lo = 0;
  }
  else {
    var toMoveUp = this.lo >>> 32 - bits;
    this.lo <<= bits;
    this.hi = (this.hi << bits) | toMoveUp;
  }
  return this; //for chaining..
};
//Shifts this word by the given number of bits to the right (max 32)..
u64.prototype.shiftRight = function(bits) {
  bits = bits % 64;
  var c = new u64(0, 0);
  if (bits === 0) {
    return this.clone();
  }
  else if (bits >= 32) {
    c.hi = 0;
    c.lo = this.hi >>> (bits - 32);
  }
  else {
    var bitsOff32 = 32 - bits,
      toMoveDown = this.hi << bitsOff32 >>> bitsOff32;
    c.hi = this.hi >>> bits;
    c.lo = this.lo >>> bits | (toMoveDown << bitsOff32);
  }
  return c; //for chaining..
};
//Rotates the bits of this word round to the left (max 32)..
u64.prototype.rotateLeft = function(bits) {
  if (bits > 32) {
    return this.rotateRight(64 - bits);
  }
  var c = new u64(0, 0);
  if (bits === 0) {
    c.lo = this.lo >>> 0;
    c.hi = this.hi >>> 0;
  }
  else if (bits === 32) { //just switch high and low over in this case..
    c.lo = this.hi;
    c.hi = this.lo;
  }
  else {
    c.lo = (this.lo << bits) | (this.hi >>> (32 - bits));
    c.hi = (this.hi << bits) | (this.lo >>> (32 - bits));
  }
  return c; //for chaining..
};

u64.prototype.setRotateLeft = function(bits) {
  if (bits > 32) {
    return this.setRotateRight(64 - bits);
  }
  var newHigh;
  if (bits === 0) {
    return this;
  }
  else if (bits === 32) { //just switch high and low over in this case..
    newHigh = this.lo;
    this.lo = this.hi;
    this.hi = newHigh;
  }
  else {
    newHigh = (this.hi << bits) | (this.lo >>> (32 - bits));
    this.lo = (this.lo << bits) | (this.hi >>> (32 - bits));
    this.hi = newHigh;
  }
  return this; //for chaining..
};
//Rotates the bits of this word round to the right (max 32)..
u64.prototype.rotateRight = function(bits) {
  if (bits > 32) {
    return this.rotateLeft(64 - bits);
  }
  var c = new u64(0, 0);
  if (bits === 0) {
    c.lo = this.lo >>> 0;
    c.hi = this.hi >>> 0;
  }
  else if (bits === 32) { //just switch high and low over in this case..
    c.lo = this.hi;
    c.hi = this.lo;
  }
  else {
    c.lo = (this.hi << (32 - bits)) | (this.lo >>> bits);
    c.hi = (this.lo << (32 - bits)) | (this.hi >>> bits);
  }
  return c; //for chaining..
};
u64.prototype.setFlip = function() {
  var newHigh;
  newHigh = this.lo;
  this.lo = this.hi;
  this.hi = newHigh;
  return this;
};
//Rotates the bits of this word round to the right (max 32)..
u64.prototype.setRotateRight = function(bits) {
  if (bits > 32) {
    return this.setRotateLeft(64 - bits);
  }

  if (bits === 0) {
    return this;
  }
  else if (bits === 32) { //just switch high and low over in this case..
    var newHigh;
    newHigh = this.lo;
    this.lo = this.hi;
    this.hi = newHigh;
  }
  else {
    newHigh = (this.lo << (32 - bits)) | (this.hi >>> bits);
    this.lo = (this.hi << (32 - bits)) | (this.lo >>> bits);
    this.hi = newHigh;
  }
  return this; //for chaining..
};
//Xors this word with the given other..
u64.prototype.xor = function(oWord) {
  var c = new u64(0, 0);
  c.hi = this.hi ^ oWord.hi;
  c.lo = this.lo ^ oWord.lo;
  return c; //for chaining..
};
//Xors this word with the given other..
u64.prototype.setxorOne = function(oWord) {
  this.hi ^= oWord.hi;
  this.lo ^= oWord.lo;
  return this; //for chaining..
};
//Ands this word with the given other..
u64.prototype.and = function(oWord) {
  var c = new u64(0, 0);
  c.hi = this.hi & oWord.hi;
  c.lo = this.lo & oWord.lo;
  return c; //for chaining..
};

//Creates a deep copy of this Word..
u64.prototype.clone = function() {
  return new u64(this.hi, this.lo);
};

u64.prototype.setxor64 = function() {
  var a = arguments;
  var i = a.length;
  while (i--) {
    this.hi ^= a[i].hi;
    this.lo ^= a[i].lo;
  }
  return this;
}

module.exports.u64 = u64;

module.exports.u = function(h, l) {
  return new u64(h, l);
}
/*
module.exports.add64 = function(a, b) {
  var lowest, lowMid, highMid, highest; //four parts of the whole 64 bit number..

  //need to add the respective parts from each number and the carry if on is present..
  lowest = (a.lo & 0XFFFF) + (b.lo & 0XFFFF);
  lowMid = (a.lo >>> 16) + (b.lo >>> 16) + (lowest >>> 16);
  highMid = (a.hi & 0XFFFF) + (b.hi & 0XFFFF) + (lowMid >>> 16);
  highest = (a.hi >>> 16) + (b.hi >>> 16) + (highMid >>> 16);

  var r = new this.u64((highest << 16) | (highMid & 0XFFFF), (lowMid << 16) | (lowest & 0XFFFF));

  return r;
};
*/
module.exports.xor64 = function() {
  var a = arguments,
    h = a[0].hi,
    l = a[0].lo;
      var i = a.length-1;
  do {
    h ^= a[i].hi;
    l ^= a[i].lo;
    i--;
  } while (i>0);
  return new this.u64(h, l);
}

module.exports.clone64Array = function(array) {
  var i = 0;
  var len = array.length;
  var a = new Array(len);
  while(i<len) {
    a[i] = array[i];
    i++;
  }
  return a;
}

//this shouldn't be a problem, but who knows in the future javascript might support 64bits
module.exports.t32 = function(x) {
  return (x & 0xFFFFFFFF)
}

module.exports.rotl32 = function(x, c) {
  return (((x) << (c)) | ((x) >>> (32 - (c)))) & (0xFFFFFFFF);
}

module.exports.rotr32 = function(x, c) {
  return this.rotl32(x, (32 - (c)));
}

module.exports.swap32 = function(val) {
  return ((val & 0xFF) << 24) |
    ((val & 0xFF00) << 8) |
    ((val >>> 8) & 0xFF00) |
    ((val >>> 24) & 0xFF);
}

module.exports.swap32Array = function(a) {
  //can't do this with map because of support for IE8 (Don't hate me plz).
  var i = 0, len = a.length;
  var r = new Array(i);
  while (i<len) {
    r[i] = (this.swap32(a[i]));
    i++;
  }
  return r;
}

module.exports.xnd64 = function(x, y, z) {
  return new this.u64(x.hi ^ ((~y.hi) & z.hi), x.lo ^ ((~y.lo) & z.lo));
}
/*
module.exports.load64 = function(x, i) {
  var l = x[i] | (x[i + 1] << 8) | (x[i + 2] << 16) | (x[i + 3] << 24);
  var h = x[i + 4] | (x[i + 5] << 8) | (x[i + 6] << 16) | (x[i + 7] << 24);
  return new this.u64(h, l);
}
*/
module.exports.bufferInsert = function(buffer, bufferOffset, data, len, dataOffset) {
  dataOffset = dataOffset | 0;
  var i = 0;
  while (i < len) {
    buffer[i + bufferOffset] = data[i + dataOffset];
    i++;
  }
}

module.exports.bufferInsert64 = function(buffer, bufferOffset, data, len) {
  var i = 0;
  while (i < len) {
    buffer[i + bufferOffset] = data[i].clone();
    i++;
  }
}
/*
module.exports.buffer2Insert = function(buffer, bufferOffset, bufferOffset2, data, len, len2) {
  while (len--) {
    var j = len2;
    while (j--) {
      buffer[len + bufferOffset][j + bufferOffset2] = data[len][j];
    }
  }
}
*/
module.exports.bufferInsertBackwards = function(buffer, bufferOffset, data, len) {
  var i = 0;
  while (i < len) {
    buffer[i + bufferOffset] = data[len - 1 - i];
    i++;
  }
}

module.exports.bufferSet = function(buffer, bufferOffset, value, len) {
  var i = 0;
  while (i < len) {
    buffer[i + bufferOffset] = value;
    i++;
  }
}

module.exports.bufferXORInsert = function(buffer, bufferOffset, data, dataOffset, len) {
  var i = 0;
  while (i < len) {
    buffer[i + bufferOffset] ^= data[i + dataOffset];
    i++;
  }
}

module.exports.xORTable = function(d, s1, s2, len) {
  var i = 0;
  while (i < len) {
    d[i] = s1[i] ^ s2[i];
    i++
  }
}

},{}],"tribushash":[function(require,module,exports){
'use strict';

var keccak = require('./lib/keccak').keccak_512;
var jh = require('./lib/jh');
var echo = require('./lib/echo');
var h = require('./lib/helper');

var tribushash = module.exports;

module.exports.echo = function(str,format, output) {
  return echo(str,format,output);
}

module.exports.jh = function(str,format, output) {
  return jh(str,format,output);
}

module.exports.keccak = function(str,format, output) {
  var msg = str;
  if (format === 2) {
    msg = h.int32Buffer2Bytes(str);
  }
  if (output === 1) {
    return keccak['array'](msg);
  } else if (output === 2) {
    return h.bytes2Int32Buffer(keccak['array'](msg));
  } else {
    return keccak['hex'](msg);
  }
}

module.exports.tribus = function(str,format, output) {
  var a = jh(a,2,2);
  a = this.keccak(a,2,1);
  a = echo(a,2,2);
  a = a.slice(0,8);
  if (output === 2) {
    return a;
  }
  else if (output === 1) {
    return h.int32Buffer2Bytes(a);
  }
  else {
    return h.int32ArrayToHexString(a);
  }
}

},{"./lib/echo":2,"./lib/helper":3,"./lib/jh":4,"./lib/keccak":5}]},{},[]);

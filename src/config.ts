import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "米崎妙妙屋",
	subtitle: "",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 100, // 主题色的默认色相值，范围从0到360。例如：红色: 0, 青色: 200, 蓝色: 250, 粉色: 345
		fixed: true, // 隐藏访问者的主题色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/banner.jpg", // 相对于 /src 目录的路径。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: true, // 显示横幅图片的署名文本
			text: "恭贺新年/X-red flower", // 要显示的署名文本
			url: "https://www.pixiv.net/artworks/104613862", // （可选）原始作品或艺术家页面的URL链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 3, // 目录中显示的标题最大深度，范围从1到3
	},
	favicon: [
		// 保持此数组为空以使用默认图标
		// {
		//   src: '/favicon/icon.png',    // 图标路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅当你有不同的明暗模式图标时设置
		//   sizes: '32x32',              // （可选）图标尺寸，仅当你有不同尺寸的图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/ShigureYukina/fuwari", // 内部链接不应包含基础路径，因为它会自动添加
			external: true, // 显示外部链接图标并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // 相对于 /src 目录的路径。如果以 '/' 开头则相对于 /public 目录
	name: "千崎志乃",
	bio: "日が暮れては 帰ろうねと思う",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
			// 如果对应的图标集尚未包含，你需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/sweyyuki/",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/shigure_yukina/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/ShigureYukina/",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1220870371/",
		},
		{
			name: "哔哩哔哩",
			url: "https://space.bilibili.com/32494859/",
			icon: "mingcute:bilibili-fill",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

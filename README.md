# Embed Video Instead (EVI)

## Purpose
Embed video instead of normal video on youtube, this will bypass anti-adblockers. It makes the videos a bit weird, there is some funky stuff, but it gets the job done.

This extension only works if you have been anti-adblocked. So if uBlockOrigin is not updated this script will kick in, substituting the "blocked" player into the embed player, but the best option is to still constantly update your uBlockOrigin Quick Filter list, if you don't know how --> [Look here](https://www.reddit.com/r/uBlockOrigin/)

## How to install
1. Clone this repo
2. Go to `chrome://extensions/` (or `brave://extensions/` if you're using brave, or `edge:` or `opera:` you get the idea go to the extensions page)
3. Enable developer mode (if you don't know how to do this, you can search it up)
4. Click on "Load unpacked"
5. Select the folder where you cloned this repo
6. **RESTART BROWSER**
7. Go to youtube and enjoy

## Special thanks
[This very cool chrome extension template](https://github.com/llagerlof/fresh-chrome-extension)

## It didn't work
Youtube is a complex website, please try reloading and/or clearing the cache (usually Ctrl + Shift + R works). If it is still bugged, you can open an issue, but I can't guarantee I'll fix it

If the video cannot be embeded, it wont work. Very few videos from my experience have this but if you're facing this problem for the time being there is no way of adding exceptions, so you will have to uninstall the extension or watch the video in another browser/anon tab

If you want to contribute, please do! I'll be happy to review and accept your PRs

## Mozilla version? Safari?
By any means, you can fork this and do the necessary changes to make it work on other browsers, I just don't have the time to do it myself.

## Known bug(s)
- [ ] When you go back to the homepage the video still runs on the background

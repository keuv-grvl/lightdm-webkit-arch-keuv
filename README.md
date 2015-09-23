## Personal greeter theme for Arch Linux

Personnal theme for LightDM highly inspired by [nejsan's Wisp theme](http://nejsan.github.io/lightdm-webkit-theme-wisp/) and
[omgomg's Google theme](https://github.com/omgmog/lightdm-webkit-google). Primarily designed to integrate with my Arch Linux.

This is a theme for LightDM Webkit (`lightdm-webkit-greeter`).


### Screenshot

*incoming*

### Features

- Selecting an available user from a dropdown
- Entering their password
- Seeing their profile picture
- Restart
- Shut down
- Suspend
- Date and hour
- Weather (not local yet)!

### Future

I would like something that looks like the Android Lollipop lock screen with some useful informations (unread emails, running jobs, system monitor, etc.).

### How to install

Instructions will differ for every platform, but I can tell you how to install it on Arch Linux:

1. Ensure `lightdm` and `lightdm-webkit-greeter` are installed
2. In the terminal, `cd` to `/usr/share/lightdm-webkit/themes/`
3. Clone this repository here, it should create a folder called `lightdm-webkit-arch-keuv`
4. Enable the theme in your `/etc/lightdm/lightdm-webkit-greeter.conf` (or `/etc/lightdm/lightdm-webkit2-greeter.conf`)

### Setting your own user picture

There are a couple of methods you can use to set your user picture in LightDM:

- Put a `jpg` of your face in your home directory as a file called `.face`

or

- Add `Icon=/path/to/your/face.png` to the bottom of `/var/lib/AccountsService/users/<youraccountname>`


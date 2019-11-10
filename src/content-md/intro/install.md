---
section: "intro"
navOrder: 2
path: "/intro/install"
title: "Installation"
---

You can install Crank in a variety of ways. Given that it's a command-line
tool, we recommend you use the CLI to install it. If you'd prefer, packaged
installers are also provided for Windows and macOS.

<!-- ![Installation of Crank CLI](/img/install.gif) -->

<aside class="notice">
Note: Crank requires docker! If you haven't already, be sure to
<a href="https://docs.docker.com/install/#supported-platforms"
  target="_blank">install docker</a> for your platform.
</aside>

---

## Standalone Installation

The simplest way to install Crank is via the command line. To quickly set up
into `/usr/local/lib/crank` and `/usr/local/bin/crank`, run this script.

```shell-session
# On macOS or Linux
$ curl -s https://get.crank.run/install.sh | sh
```

Note: this script requires `sudo` and is not Windows compatible.

---

## Packaged Installers

If you're running Windows or you're running macOS and prefer to install Crank
via a packaged installer, use the following:

- **[Crank - Windows 64-bit Installer][64-bit-exe-latest]**
- **[Crank - Windows 32-bit Installer][32-bit-exe-latest]**
- **[Crank - macOS Installer][macos-pkg-latest]**

Note: the packages are currently unsigned, so you may need to explicitly allow
them or trust them in your system preferences / security & privacy settings.

---

## Visual Studio Code

For the best Scenario authoring experience, we highly recommend using
[Visual Studio Code][vscode] and installing the
[Crank Scenario Language extension][vscode-extension].

<a target="_blank" class="btn btn-secondary" role="button" href="https://marketplace.visualstudio.com/items?itemName=run-crank.crank-scenario-language">Get the Extension</a>

---

## Updating Crank

```shell-session
$ crank update
```

Crank will automatically attempt to update itself in the background. You can
also run `crank update` to explicitly update to the latest version.

---

## Uninstalling Crank

**On macOS**, you can uninstall the CLI by typing:
```shell-session
$ rm -rf /usr/local/crank \
  /usr/local/lib/crank \
  /usr/local/bin/crank \
  ~/.local/share/crank \
  ~/Library/Caches/crank
```

**On Linux**, you can uninstall the CLI by typing:
```shell-session
$ rm /usr/local/bin/crank
$ rm -rf /usr/local/lib/crank /usr/local/crank
$ rm -rf ~/.local/share/crank ~/.cache/crank
```

**On Windows**, to uninstall Crank:

1. Click **Start** > **Control Panel** > **Programs** > **Programs and Features**.
2. Select **Crank CLI**, and then click Uninstall. Note that the uninstaller
   is unsigned.

<aside class="notice">
The Windows uninstaller is not automatically updated alongside the CLI. If it's
been a while since you first installed the CLI and you're attempting to
uninstall it to fix an issue, you might first need to manually install the
latest version of the CLI to obtain an up-to-date uninstaller.
</aside>

If this is unsuccessful, manually delete `%LOCALAPPDATA%\crank` along with the directory in Program Files.

[64-bit-exe-latest]: https://get.crank.run/crank-x64.exe
[32-bit-exe-latest]: https://get.crank.run/crank-x86.exe
[macos-pkg-latest]: https://get.crank.run/crank.pkg
[vscode]: https://code.visualstudio.com/download
[vscode-extension]: https://marketplace.visualstudio.com/items?itemName=run-crank.crank-scenario-language

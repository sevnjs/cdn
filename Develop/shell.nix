{ pkgs ? import <nixpkgs> { config = {allowUnfree = true;}; } }:
#{ pkgs ? import (fetchTarball  "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05") {} }:
let
  message = "Lets Start Development";
in 
pkgs.mkShellNoCC {
  buildInputs = with pkgs; [ nodejs ];

  packages = with pkgs; [
    nodejs
    #nodePackages.browser-sync 
    #nodePackages.nodemon
    #nodePackages.concurrently
    vscodium
#    vscode 
    #firefox
    vim 
    curl     
  #  cinnamon.nemo
  ];

  shellHook = ''
	npm install
	npm run dev & echo "y" | codium . & firefox 127.0.0.1:4000

    '';
}

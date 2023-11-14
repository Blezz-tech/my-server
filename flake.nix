{
 description = "A simple flake that uses MariaDB";

 inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
 inputs.devenv.url = "github:cachix/devenv";

 outputs = { self, nixpkgs, devenv, ... } @ inputs:
   let
     pkgs = nixpkgs.legacyPackages."x86_64-linux";
   in
   {
     devShell.x86_64-linux = devenv.lib.mkShell {
       inherit inputs pkgs;
       modules = [
         ({ pkgs, config, ... }: {
           # This is your devenv configuration
           packages = [ pkgs.mariadb ];
           services.mariadb.enable = true;
           services.mariadb.package = pkgs.mariadb;
         })
       ];
     };
   };
}

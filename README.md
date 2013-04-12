MondrianInAction
================

Stuff for Examples in Mondrian in Action

To create your own version, or to re-create the virtual machine.

- Install Java 1.6 or 1.7  (sudo apt-get install openjdk)
- Install git (sudo apt-get install git)
- Install MySQL, create user root/mondrian
- Install adventure_works_dw according to data/loading_data.txt
- Copy userhome scripts to home dir (cp userhome/* $HOME/) and add $HOME to $PATH in .bashrc
- Base installation of Pentaho 4.8 (link to SF)
- Download Mondrian4 Saiku plugin

Create directory for Pentaho
mkdir /opt/pentaho/biserver-ce-4.8
Expand Pentaho
tar -xzf biserver-ce-4.8.tgz

Start pentaho 

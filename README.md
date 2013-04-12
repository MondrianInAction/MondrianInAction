MondrianInAction
================

Stuff for Examples in Mondrian in Action

To create your own version, or to re-create the virtual machine.

- Install Java 1.6 or 1.7  (sudo apt-get install openjdk)
- Install git (sudo apt-get install git)
- Install MySQL, create user root/mondrian
- Install adventure_works_dw according to data/loading_data.txt
- Install foodmart using standard Mondrian foodmart loader to foodmart
- Copy userhome scripts to home dir (cp userhome/* $HOME/) and add $HOME to $PATH in .bashrc
- Base installation of Pentaho 4.8 (link to SF)
- Download Mondrian4 Saiku plugin, install to pentaho-solutions/system/ (http://ci.analytical-labs.com/job/saiku-mondrian4/ saiku-plugin-MONDRIAN4-*
- git clone MondrianInAction to pentaho-solutions/MondrianInAction
- copy MondrianInAction/system/olap/datasources.xml to pentaho-solutions/system/olap/datasources.xml
- delete mondrian-* olap4j-*from biserver-ce-4.8/tomcat/webapps/pentaho/WEB-INF/lib
- copy mondrian-* olap4j-* from saiku plugin lib directory to biserver-ce-4.8/tomcat/webapps/pentaho/WEB-INF/lib
- copy mysql driver to tomcat/lib
- copy mysql driver to admin console if needed
- start administration console, add two datasources for mysql.  AdventureWorksDW (jdbc:mysql://localhost/adventure_works_dw) and FoodMart (jdbc:mysql://localhost/foodmart)




-- App Database--
create database shortd;

-- Select Database -- 
use shortd;

-- Table Create --

create table styles(
idStyle int unsigned not null auto_increment,
nameStyle varchar(150) not null,
ibusStyle int not null,
descriptionStyle varchar(400) not null,
primary key (idStyle)
);

create table contact (
idContact int unsigned not null auto_increment,
contactName varchar(150) not null,
contactMail varchar(150) not null,
primary key (idContact)
);

insert into styles values (null ,'Golden',  25, 'A hop-forward, average-strength to moderately-strong pale bitter. Drinkability and a refreshing quality are critical components of the style, as it was initially a summer seasonal beer.');

insert into styles values (null ,'Kolsch',  33, 'A subtle, brilliantly clear, pale beer with a delicate balance of malt, fruit, and hop character, moderate bitterness, and a well-attenuated but soft finish. Freshness makes a huge difference with this beer, as the delicate character can fade quickly with age.'); 

insert into styles values (null ,'Amber',  22, 'An amber, malty German lager with a clean, rich, toasty, bready malt flavor, restrained bitterness, and a well-attenuated finish. The overall malt impression is soft, elegant, and complex, with a rich malty aftertaste that is never cloying or heavy.'); 

insert into styles values (null ,'Hazy IPA',  45, 'An American IPA with intense fruit flavors and aromas, a soft body, smooth mouthfeel, and often opaque with substantial haze. Less perceived bitterness than traditional IPAs but always massively hop-forward.');


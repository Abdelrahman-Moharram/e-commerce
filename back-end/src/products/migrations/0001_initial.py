# Generated by Django 3.2.6 on 2021-09-20 18:25

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import products.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shops', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('mobile phone', 'mobile phone'), ('IPad', 'IPad'), ('Tablet', 'Tablet'), ('playstation', 'playstation'), ('X-Box', 'X-Box'), ('PCs', 'PCs'), ('watch', 'watch'), ('PC Accessories', 'PC Accessories'), ('fitness tools', 'fitness tools'), ('clothes', 'clothes'), ('Make ups', 'Make ups')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('AF', 'AFGHANISTAN'), ('AL', 'ALBANIA'), ('DZ', 'ALGERIA'), ('AS', 'AMERICAN SAMOA'), ('AD', 'ANDORRA'), ('AO', 'ANGOLA'), ('AI', 'ANGUILLA'), ('AQ', 'ANTARCTICA'), ('AG', 'ANTIGUA AND BARBUDA'), ('AR', 'ARGENTINA'), ('AM', 'ARMENIA'), ('AW', 'ARUBA'), ('AU', 'AUSTRALIA'), ('AT', 'AUSTRIA'), ('AZ', 'AZERBAIJAN'), ('BS', 'BAHAMAS'), ('BH', 'BAHRAIN'), ('BD', 'BANGLADESH'), ('BB', 'BARBADOS'), ('BY', 'BELARUS'), ('BE', 'BELGIUM'), ('BZ', 'BELIZE'), ('BJ', 'BENIN'), ('BM', 'BERMUDA'), ('BT', 'BHUTAN'), ('BO', 'BOLIVIA'), ('BA', 'BOSNIA AND HERZEGOVINA'), ('BW', 'BOTSWANA'), ('BV', 'BOUVET ISLAND'), ('BR', 'BRAZIL'), ('IO', 'BRITISH INDIAN OCEAN TERRITORY'), ('BN', 'BRUNEI DARUSSALAM'), ('BG', 'BULGARIA'), ('BF', 'BURKINA FASO'), ('BI', 'BURUNDI'), ('KH', 'CAMBODIA'), ('CM', 'CAMEROON'), ('CA', 'CANADA'), ('CV', 'CAPE VERDE'), ('KY', 'CAYMAN ISLANDS'), ('CF', 'CENTRAL AFRICAN REPUBLIC'), ('TD', 'CHAD'), ('CL', 'CHILE'), ('CN', 'CHINA'), ('CX', 'CHRISTMAS ISLAND'), ('CC', 'COCOS (KEELING) ISLANDS'), ('CO', 'COLOMBIA'), ('KM', 'COMOROS'), ('CG', 'CONGO'), ('CD', 'CONGO, THE DEMOCRATIC REPUBLIC OF'), ('CK', 'COOK ISLANDS'), ('CR', 'COSTA RICA'), ('CI', "CÃ”TE D'IVOIRE"), ('HR', 'CROATIA'), ('CU', 'CUBA'), ('CY', 'CYPRUS'), ('CZ', 'CZECH REPUBLIC'), ('DK', 'DENMARK'), ('DJ', 'DJIBOUTI'), ('DM', 'DOMINICA'), ('DO', 'DOMINICAN REPUBLIC'), ('EC', 'ECUADOR'), ('EG', 'EGYPT'), ('SV', 'EL SALVADOR'), ('GQ', 'EQUATORIAL GUINEA'), ('ER', 'ERITREA'), ('EE', 'ESTONIA'), ('ET', 'ETHIOPIA'), ('FK', 'FALKLAND ISLANDS (MALVINAS)'), ('FO', 'FAROE ISLANDS'), ('FJ', 'FIJI'), ('FI', 'FINLAND'), ('FR', 'FRANCE'), ('GF', 'FRENCH GUIANA'), ('PF', 'FRENCH POLYNESIA'), ('TF', 'FRENCH SOUTHERN TERRITORIES'), ('GA', 'GABON'), ('GM', 'GAMBIA'), ('GE', 'GEORGIA'), ('DE', 'GERMANY'), ('GH', 'GHANA'), ('GI', 'GIBRALTAR'), ('GR', 'GREECE'), ('GL', 'GREENLAND'), ('GD', 'GRENADA'), ('GP', 'GUADELOUPE'), ('GU', 'GUAM'), ('GT', 'GUATEMALA'), ('GN', 'GUINEA'), ('GW', 'GUINEA'), ('GY', 'GUYANA'), ('HT', 'HAITI'), ('HM', 'HEARD ISLAND AND MCDONALD ISLANDS'), ('HN', 'HONDURAS'), ('HK', 'HONG KONG'), ('HU', 'HUNGARY'), ('IS', 'ICELAND'), ('IN', 'INDIA'), ('ID', 'INDONESIA'), ('IR', 'IRAN, ISLAMIC REPUBLIC OF'), ('IQ', 'IRAQ'), ('IE', 'IRELAND'), ('IL', 'ISRAEL'), ('IT', 'ITALY'), ('JM', 'JAMAICA'), ('JP', 'JAPAN'), ('JO', 'JORDAN'), ('KZ', 'KAZAKHSTAN'), ('KE', 'KENYA'), ('KI', 'KIRIBATI'), ('KP', "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF"), ('KR', 'KOREA, REPUBLIC OF'), ('KW', 'KUWAIT'), ('KG', 'KYRGYZSTAN'), ('LA', "LAO PEOPLE'S DEMOCRATIC REPUBLIC"), ('LV', 'LATVIA'), ('LB', 'LEBANON'), ('LS', 'LESOTHO'), ('LR', 'LIBERIA'), ('LY', 'LIBYAN ARAB JAMAHIRIYA'), ('LI', 'LIECHTENSTEIN'), ('LT', 'LITHUANIA'), ('LU', 'LUXEMBOURG'), ('MO', 'MACAO'), ('MK', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF'), ('MG', 'MADAGASCAR'), ('MW', 'MALAWI'), ('MY', 'MALAYSIA'), ('MV', 'MALDIVES'), ('ML', 'MALI'), ('MT', 'MALTA'), ('MH', 'MARSHALL ISLANDS'), ('MQ', 'MARTINIQUE'), ('MR', 'MAURITANIA'), ('MU', 'MAURITIUS'), ('YT', 'MAYOTTE'), ('MX', 'MEXICO'), ('FM', 'MICRONESIA, FEDERATED STATES OF'), ('MD', 'MOLDOVA, REPUBLIC OF'), ('MC', 'MONACO'), ('MN', 'MONGOLIA'), ('MS', 'MONTSERRAT'), ('MA', 'MOROCCO'), ('MZ', 'MOZAMBIQUE'), ('MM', 'MYANMAR'), ('NA', 'NAMIBIA'), ('NR', 'NAURU'), ('NP', 'NEPAL'), ('NL', 'NETHERLANDS'), ('AN', 'NETHERLANDS ANTILLES'), ('NC', 'NEW CALEDONIA'), ('NZ', 'NEW ZEALAND'), ('NI', 'NICARAGUA'), ('NE', 'NIGER'), ('NG', 'NIGERIA'), ('NU', 'NIUE'), ('NF', 'NORFOLK ISLAND'), ('MP', 'NORTHERN MARIANA ISLANDS'), ('NO', 'NORWAY'), ('OM', 'OMAN'), ('PK', 'PAKISTAN'), ('PW', 'PALAU'), ('PS', 'PALESTINIAN TERRITORY, OCCUPIED'), ('PA', 'PANAMA'), ('PG', 'PAPUA NEW GUINEA'), ('PY', 'PARAGUAY'), ('PE', 'PERU'), ('PH', 'PHILIPPINES'), ('PN', 'PITCAIRN'), ('PL', 'POLAND'), ('PT', 'PORTUGAL'), ('PR', 'PUERTO RICO'), ('QA', 'QATAR'), ('RE', 'RÃ‰UNION'), ('RO', 'ROMANIA'), ('RU', 'RUSSIAN FEDERATION'), ('RW', 'RWANDA'), ('SH', 'SAINT HELENA'), ('KN', 'SAINT KITTS AND NEVIS'), ('LC', 'SAINT LUCIA'), ('PM', 'SAINT PIERRE AND MIQUELON'), ('VC', 'SAINT VINCENT AND THE GRENADINES'), ('WS', 'SAMOA'), ('SM', 'SAN MARINO'), ('ST', 'SAO TOME AND PRINCIPE'), ('SA', 'SAUDI ARABIA'), ('SN', 'SENEGAL'), ('CS', 'SERBIA AND MONTENEGRO'), ('SC', 'SEYCHELLES'), ('SL', 'SIERRA LEONE'), ('SG', 'SINGAPORE'), ('SK', 'SLOVAKIA'), ('SI', 'SLOVENIA'), ('SB', 'SOLOMON ISLANDS'), ('SO', 'SOMALIA'), ('ZA', 'SOUTH AFRICA'), ('GS', 'SOUTH GEORGIA AND SOUTH SANDWICH ISLANDS'), ('ES', 'SPAIN'), ('LK', 'SRI LANKA'), ('SD', 'SUDAN'), ('SR', 'SURINAME'), ('SJ', 'SVALBARD AND JAN MAYEN'), ('SZ', 'SWAZILAND'), ('SE', 'SWEDEN'), ('CH', 'SWITZERLAND'), ('SY', 'SYRIAN ARAB REPUBLIC'), ('TW', 'TAIWAN, PROVINCE OF CHINA'), ('TJ', 'TAJIKISTAN'), ('TZ', 'TANZANIA, UNITED REPUBLIC OF'), ('TH', 'THAILAND'), ('TL', 'TIMOR'), ('TG', 'TOGO'), ('TK', 'TOKELAU'), ('TO', 'TONGA'), ('TT', 'TRINIDAD AND TOBAGO'), ('TN', 'TUNISIA'), ('TR', 'TURKEY'), ('TM', 'TURKMENISTAN'), ('TC', 'TURKS AND CAICOS ISLANDS'), ('TV', 'TUVALU'), ('UG', 'UGANDA'), ('UA', 'UKRAINE'), ('AE', 'UNITED ARAB EMIRATES'), ('GB', 'UNITED KINGDOM'), ('US', 'UNITED STATES'), ('UM', 'UNITED STATES MINOR OUTLYING ISLANDS'), ('UY', 'URUGUAY'), ('UZ', 'UZBEKISTAN'), ('VU', 'VANUATU'), ('VN', 'VIET NAM'), ('VG', 'VIRGIN ISLANDS, BRITISH'), ('VI', 'VIRGIN ISLANDS, U.S.'), ('WF', 'WALLIS AND FUTUNA'), ('EH', 'WESTERN SAHARA'), ('YE', 'YEMEN'), ('ZW', 'ZIMBABWE')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='prodFeatures',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feature', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('oprice', models.FloatField(verbose_name='Original price')),
                ('dprice', models.FloatField(verbose_name='Discount price')),
                ('image', models.ImageField(default='media/defaults/Shop_ICON_Final.jpg', upload_to=products.models.save_images)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.category')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.country')),
                ('shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shops.shop')),
            ],
        ),
        migrations.CreateModel(
            name='Sub_feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.TextField(max_length=350)),
                ('prod_feature', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.prodfeatures')),
            ],
        ),
        migrations.AddField(
            model_name='prodfeatures',
            name='prod',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product'),
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('prod', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'prod')},
                'index_together': {('user', 'prod')},
            },
        ),
    ]

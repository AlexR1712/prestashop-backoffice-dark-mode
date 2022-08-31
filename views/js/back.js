/**
* 2007-2022 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/
function bsn_toggleDarkMode() {
    if (window.localStorage.getItem('bsn_darkModeEnabled') === 'no') {
        DarkReader.enable({
            brightness: 100,
            contrast: 95,
            sepia: 0
        });
        window.localStorage.setItem('bsn_darkModeEnabled', 'yes');
    } else {
        window.localStorage.setItem('bsn_darkModeEnabled', 'no');
        DarkReader.disable();
    }
}


if (window.localStorage.getItem('bsn_darkModeEnabled') === 'yes') {
    DarkReader.enable({
        brightness: 100,
        contrast: 95,
        sepia: 0
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var bsn_darkModeButtonContainer = document.querySelector("#tab-AdminDashboard")
    bsn_darkModeButtonContainer.insertAdjacentHTML('afterend', `<li class="link-levelone link-active" id="tab-AdminDashboard" data-submenu="1">
    <span id="header_shopname" class="shop-state link bsn-darkmode-toggle" onclick="bsn_toggleDarkMode()">
        <i class="material-icons">brightness_6</i>
        <span>Toggle Dark Mode</span>
    </span>
    </li>`);
    
    if (window.localStorage.getItem('bsn_darkModeEnabled') === null) {
        window.localStorage.setItem('bsn_darkModeEnabled', 'no');
        DarkReader.disable();
    }
    
    // const isEnabled = DarkReader.isEnabled();
    
    console.log('Dark Mode Enabled: ', isEnabled)
    
    

  }, false);

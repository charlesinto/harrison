import { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const smScreenHanlder = (e: MediaQueryListEvent) => {
    console.log(e);
    if (e.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", smScreenHanlder);
    return window
      .matchMedia("(max-width: 768px)")
      .removeEventListener("change", smScreenHanlder);
  }, []);
  return (
    <div>
      {isSmallScreen && (
        <nav className={styles["nav-container"]}>
          <section className={styles["logo"]}></section>
        </nav>
      )}
      {!isSmallScreen ? (
        <nav className={styles["nav-container"]}>
          <Link href="/">
            <a href="/">
              <section className={styles["logo"]}></section>
            </a>
          </Link>
          <ul className={styles["menu-list"]}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/training">Training</Link>
            </li>

            <li>Reviews</li>
            <li>Get in touch</li>
            <li>
              <Link href="/shop">Shopping</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <ButtonLink href="book-appointment" text="Book Appointment" />
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles["bottom-tabmenu"]}>
          <ul>
            <li className={styles["active"]}>
              <Link href="/">
                <a>
                  <span className={styles["menu-icon"]}>
                    <i className="ion ion-ios-home"></i>
                  </span>
                  <span className="icon-title">Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a href="/about">
                  <span className={styles["menu-icon"]}>
                    <i className="ion ion-ios-information-circle-outline"></i>
                  </span>
                  <span className="icon-title">About</span>
                </a>
              </Link>
            </li>
            <li>
              <span className={styles["menu-icon"]}>
                <i className="ion ion-ios-pulse"></i>
              </span>
              <span className="icon-title">Reviews</span>
            </li>
            <li>
              <Link href="/training">
                <a>
                  <span className={styles["menu-icon"]}>
                    <i className="ion ion-ios-school"></i>
                  </span>
                  <span className="icon-title">Training</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/book-appointment">
                <a>
                  <span className={styles["menu-icon"]}>
                    <i className="ion ion-ios-calendar"></i>
                  </span>
                  <span className="icon-title">Book</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a href="/shop">
                  <span className={styles["menu-icon"]}>
                    <i className="ion ion-ios-cart"></i>
                  </span>
                  <span className="icon-title">Shop</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBar;

/*

.ion, .ionicons, .ion-ios-add:before, .ion-ios-add-circle:before, .ion-ios-add-circle-outline:before, .ion-ios-airplane:before, .ion-ios-alarm:before, .ion-ios-albums:before, .ion-ios-alert:before, .ion-ios-american-football:before, .ion-ios-analytics:before, .ion-ios-aperture:before, .ion-ios-apps:before, .ion-ios-appstore:before, .ion-ios-archive:before, .ion-ios-arrow-back:before, .ion-ios-arrow-down:before, .ion-ios-arrow-dropdown:before, .ion-ios-arrow-dropdown-circle:before, .ion-ios-arrow-dropleft:before, .ion-ios-arrow-dropleft-circle:before, .ion-ios-arrow-dropright:before, .ion-ios-arrow-dropright-circle:before, .ion-ios-arrow-dropup:before, .ion-ios-arrow-dropup-circle:before, .ion-ios-arrow-forward:before, .ion-ios-arrow-round-back:before, .ion-ios-arrow-round-down:before, .ion-ios-arrow-round-forward:before, .ion-ios-arrow-round-up:before, .ion-ios-arrow-up:before, .ion-ios-at:before, .ion-ios-attach:before, .ion-ios-backspace:before, .ion-ios-barcode:before, .ion-ios-baseball:before, .ion-ios-basket:before, .ion-ios-basketball:before, .ion-ios-battery-charging:before, .ion-ios-battery-dead:before, .ion-ios-battery-full:before, .ion-ios-beaker:before, .ion-ios-bed:before, .ion-ios-beer:before, .ion-ios-bicycle:before, .ion-ios-bluetooth:before, .ion-ios-boat:before, .ion-ios-body:before, .ion-ios-bonfire:before, .ion-ios-book:before, .ion-ios-bookmark:before, .ion-ios-bookmarks:before, .ion-ios-bowtie:before, .ion-ios-briefcase:before, .ion-ios-browsers:before, .ion-ios-brush:before, .ion-ios-bug:before, .ion-ios-build:before, .ion-ios-bulb:before, .ion-ios-bus:before, .ion-ios-business:before, .ion-ios-cafe:before, .ion-ios-calculator:before, .ion-ios-calendar:before, .ion-ios-call:before, .ion-ios-camera:before, .ion-ios-car:before, .ion-ios-card:before, .ion-ios-cart:before, .ion-ios-cash:before, .ion-ios-cellular:before, .ion-ios-chatboxes:before, .ion-ios-chatbubbles:before, .ion-ios-checkbox:before, .ion-ios-checkbox-outline:before, .ion-ios-checkmark:before, .ion-ios-checkmark-circle:before, .ion-ios-checkmark-circle-outline:before, .ion-ios-clipboard:before, .ion-ios-clock:before, .ion-ios-close:before, .ion-ios-close-circle:before, .ion-ios-close-circle-outline:before, .ion-ios-cloud:before, .ion-ios-cloud-circle:before, .ion-ios-cloud-done:before, .ion-ios-cloud-download:before, .ion-ios-cloud-outline:before, .ion-ios-cloud-upload:before, .ion-ios-cloudy:before, .ion-ios-cloudy-night:before, .ion-ios-code:before, .ion-ios-code-download:before, .ion-ios-code-working:before, .ion-ios-cog:before, .ion-ios-color-fill:before, .ion-ios-color-filter:before, .ion-ios-color-palette:before, .ion-ios-color-wand:before, .ion-ios-compass:before, .ion-ios-construct:before, .ion-ios-contact:before, .ion-ios-contacts:before, .ion-ios-contract:before, .ion-ios-contrast:before, .ion-ios-copy:before, .ion-ios-create:before, .ion-ios-crop:before, .ion-ios-cube:before, .ion-ios-cut:before, .ion-ios-desktop:before, .ion-ios-disc:before, .ion-ios-document:before, .ion-ios-done-all:before, .ion-ios-download:before, .ion-ios-easel:before, .ion-ios-egg:before, .ion-ios-exit:before, .ion-ios-expand:before, .ion-ios-eye:before, .ion-ios-eye-off:before, .ion-ios-fastforward:before, .ion-ios-female:before, .ion-ios-filing:before, .ion-ios-film:before, .ion-ios-finger-print:before, .ion-ios-fitness:before, .ion-ios-flag:before, .ion-ios-flame:before, .ion-ios-flash:before, .ion-ios-flash-off:before, .ion-ios-flashlight:before, .ion-ios-flask:before, .ion-ios-flower:before, .ion-ios-folder:before, .ion-ios-folder-open:before, .ion-ios-football:before, .ion-ios-funnel:before, .ion-ios-gift:before, .ion-ios-git-branch:before, .ion-ios-git-commit:before, .ion-ios-git-compare:before, .ion-ios-git-merge:before, .ion-ios-git-network:before, .ion-ios-git-pull-request:before, .ion-ios-glasses:before, .ion-ios-globe:before, .ion-ios-grid:before, .ion-ios-hammer:before, .ion-ios-hand:before, .ion-ios-happy:before, .ion-ios-headset:before, .ion-ios-heart:before, .ion-ios-heart-dislike:before, .ion-ios-heart-empty:before, .ion-ios-heart-half:before, .ion-ios-help:before, .ion-ios-help-buoy:before, .ion-ios-help-circle:before, .ion-ios-help-circle-outline:before, .ion-ios-home:before, .ion-ios-hourglass:before, .ion-ios-ice-cream:before, .ion-ios-image:before, .ion-ios-images:before, .ion-ios-infinite:before, .ion-ios-information:before, .ion-ios-information-circle:before, .ion-ios-information-circle-outline:before, .ion-ios-jet:before, .ion-ios-journal:before, .ion-ios-key:before, .ion-ios-keypad:before, .ion-ios-laptop:before, .ion-ios-leaf:before, .ion-ios-link:before, .ion-ios-list:before, .ion-ios-list-box:before, .ion-ios-locate:before, .ion-ios-lock:before, .ion-ios-log-in:before, .ion-ios-log-out:before, .ion-ios-magnet:before, .ion-ios-mail:before, .ion-ios-mail-open:before, .ion-ios-mail-unread:before, .ion-ios-male:before, .ion-ios-man:before, .ion-ios-map:before, .ion-ios-medal:before, .ion-ios-medical:before, .ion-ios-medkit:before, .ion-ios-megaphone:before, .ion-ios-menu:before, .ion-ios-mic:before, .ion-ios-mic-off:before, .ion-ios-microphone:before, .ion-ios-moon:before, .ion-ios-more:before, .ion-ios-move:before, .ion-ios-musical-note:before, .ion-ios-musical-notes:before, .ion-ios-navigate:before, .ion-ios-notifications:before, .ion-ios-notifications-off:before, .ion-ios-notifications-outline:before, .ion-ios-nuclear:before, .ion-ios-nutrition:before, .ion-ios-open:before, .ion-ios-options:before, .ion-ios-outlet:before, .ion-ios-paper:before, .ion-ios-paper-plane:before, .ion-ios-partly-sunny:before, .ion-ios-pause:before, .ion-ios-paw:before, .ion-ios-people:before, .ion-ios-person:before, .ion-ios-person-add:before, .ion-ios-phone-landscape:before, .ion-ios-phone-portrait:before, .ion-ios-photos:before, .ion-ios-pie:before, .ion-ios-pin:before, .ion-ios-pint:before, .ion-ios-pizza:before, .ion-ios-planet:before, .ion-ios-play:before, .ion-ios-play-circle:before, .ion-ios-podium:before, .ion-ios-power:before, .ion-ios-pricetag:before, .ion-ios-pricetags:before, .ion-ios-print:before, .ion-ios-pulse:before, .ion-ios-qr-scanner:before, .ion-ios-quote:before, .ion-ios-radio:before, .ion-ios-radio-button-off:before, .ion-ios-radio-button-on:before, .ion-ios-rainy:before, .ion-ios-recording:before, .ion-ios-redo:before, .ion-ios-refresh:before, .ion-ios-refresh-circle:before, .ion-ios-remove:before, .ion-ios-remove-circle:before, .ion-ios-remove-circle-outline:before, .ion-ios-reorder:before, .ion-ios-repeat:before, .ion-ios-resize:before, .ion-ios-restaurant:before, .ion-ios-return-left:before, .ion-ios-return-right:before, .ion-ios-reverse-camera:before, .ion-ios-rewind:before, .ion-ios-ribbon:before, .ion-ios-rocket:before, .ion-ios-rose:before, .ion-ios-sad:before, .ion-ios-save:before, .ion-ios-school:before, .ion-ios-search:before, .ion-ios-send:before, .ion-ios-settings:before, .ion-ios-share:before, .ion-ios-share-alt:before, .ion-ios-shirt:before, .ion-ios-shuffle:before, .ion-ios-skip-backward:before, .ion-ios-skip-forward:before, .ion-ios-snow:before, .ion-ios-speedometer:before, .ion-ios-square:before, .ion-ios-square-outline:before, .ion-ios-star:before, .ion-ios-star-half:before, .ion-ios-star-outline:before, .ion-ios-stats:before, .ion-ios-stopwatch:before, .ion-ios-subway:before, .ion-ios-sunny:before, .ion-ios-swap:before, .ion-ios-switch:before, .ion-ios-sync:before, .ion-ios-tablet-landscape:before, .ion-ios-tablet-portrait:before, .ion-ios-tennisball:before, .ion-ios-text:before, .ion-ios-thermometer:before, .ion-ios-thumbs-down:before, .ion-ios-thumbs-up:before, .ion-ios-thunderstorm:before, .ion-ios-time:before, .ion-ios-timer:before, .ion-ios-today:before, .ion-ios-train:before, .ion-ios-transgender:before, .ion-ios-trash:before, .ion-ios-trending-down:before, .ion-ios-trending-up:before, .ion-ios-trophy:before, .ion-ios-tv:before, .ion-ios-umbrella:before, .ion-ios-undo:before, .ion-ios-unlock:before, .ion-ios-videocam:before, .ion-ios-volume-high:before, .ion-ios-volume-low:before, .ion-ios-volume-mute:before, .ion-ios-volume-off:before, .ion-ios-walk:before, .ion-ios-wallet:before, .ion-ios-warning:before, .ion-ios-watch:before, .ion-ios-water:before, .ion-ios-wifi:before, .ion-ios-wine:before, .ion-ios-woman:before, .ion-logo-android:before, .ion-logo-angular:before, .ion-logo-apple:before, .ion-logo-bitbucket:before, .ion-logo-bitcoin:before, .ion-logo-buffer:before, .ion-logo-chrome:before, .ion-logo-closed-captioning:before, .ion-logo-codepen:before, .ion-logo-css3:before, .ion-logo-designernews:before, .ion-logo-dribbble:before, .ion-logo-dropbox:before, .ion-logo-euro:before, .ion-logo-facebook:before, .ion-logo-flickr:before, .ion-logo-foursquare:before, .ion-logo-freebsd-devil:before, .ion-logo-game-controller-a:before, .ion-logo-game-controller-b:before, .ion-logo-github:before, .ion-logo-google:before, .ion-logo-googleplus:before, .ion-logo-hackernews:before, .ion-logo-html5:before, .ion-logo-instagram:before, .ion-logo-ionic:before, .ion-logo-ionitron:before, .ion-logo-javascript:before, .ion-logo-linkedin:before, .ion-logo-markdown:before, .ion-logo-model-s:before, .ion-logo-no-smoking:before, .ion-logo-nodejs:before, .ion-logo-npm:before, .ion-logo-octocat:before, .ion-logo-pinterest:before, .ion-logo-playstation:before, .ion-logo-polymer:before, .ion-logo-python:before, .ion-logo-reddit:before, .ion-logo-rss:before, .ion-logo-sass:before, .ion-logo-skype:before, .ion-logo-slack:before, .ion-logo-snapchat:before, .ion-logo-steam:before, .ion-logo-tumblr:before, .ion-logo-tux:before, .ion-logo-twitch:before, .ion-logo-twitter:before, .ion-logo-usd:before, .ion-logo-vimeo:before, .ion-logo-vk:before, .ion-logo-whatsapp:before, .ion-logo-windows:before, .ion-logo-wordpress:before, .ion-logo-xbox:before, .ion-logo-xing:before, .ion-logo-yahoo:before, .ion-logo-yen:before, .ion-logo-youtube:before, .ion-md-add:before, .ion-md-add-circle:before, .ion-md-add-circle-outline:before, .ion-md-airplane:before, .ion-md-alarm:before, .ion-md-albums:before, .ion-md-alert:before, .ion-md-american-football:before, .ion-md-analytics:before, .ion-md-aperture:before, .ion-md-apps:before, .ion-md-appstore:before, .ion-md-archive:before, .ion-md-arrow-back:before, .ion-md-arrow-down:before, .ion-md-arrow-dropdown:before, .ion-md-arrow-dropdown-circle:before, .ion-md-arrow-dropleft:before, .ion-md-arrow-dropleft-circle:before, .ion-md-arrow-dropright:before, .ion-md-arrow-dropright-circle:before, .ion-md-arrow-dropup:before, .ion-md-arrow-dropup-circle:before, .ion-md-arrow-forward:before, .ion-md-arrow-round-back:before, .ion-md-arrow-round-down:before, .ion-md-arrow-round-forward:before, .ion-md-arrow-round-up:before, .ion-md-arrow-up:before, .ion-md-at:before, .ion-md-attach:before, .ion-md-backspace:before, .ion-md-barcode:before, .ion-md-baseball:before, .ion-md-basket:before, .ion-md-basketball:before, .ion-md-battery-charging:before, .ion-md-battery-dead:before, .ion-md-battery-full:before, .ion-md-beaker:before, .ion-md-bed:before, .ion-md-beer:before, .ion-md-bicycle:before, .ion-md-bluetooth:before, .ion-md-boat:before, .ion-md-body:before, .ion-md-bonfire:before, .ion-md-book:before, .ion-md-bookmark:before, .ion-md-bookmarks:before, .ion-md-bowtie:before, .ion-md-briefcase:before, .ion-md-browsers:before, .ion-md-brush:before, .ion-md-bug:before, .ion-md-build:before, .ion-md-bulb:before, .ion-md-bus:before, .ion-md-business:before, .ion-md-cafe:before, .ion-md-calculator:before, .ion-md-calendar:before, .ion-md-call:before, .ion-md-camera:before, .ion-md-car:before, .ion-md-card:before, .ion-md-cart:before, .ion-md-cash:before, .ion-md-cellular:before, .ion-md-chatboxes:before, .ion-md-chatbubbles:before, .ion-md-checkbox:before, .ion-md-checkbox-outline:before, .ion-md-checkmark:before, .ion-md-checkmark-circle:before, .ion-md-checkmark-circle-outline:before, .ion-md-clipboard:before, .ion-md-clock:before, .ion-md-close:before, .ion-md-close-circle:before, .ion-md-close-circle-outline:before, .ion-md-cloud:before, .ion-md-cloud-circle:before, .ion-md-cloud-done:before, .ion-md-cloud-download:before, .ion-md-cloud-outline:before, .ion-md-cloud-upload:before, .ion-md-cloudy:before, .ion-md-cloudy-night:before, .ion-md-code:before, .ion-md-code-download:before, .ion-md-code-working:before, .ion-md-cog:before, .ion-md-color-fill:before, .ion-md-color-filter:before, .ion-md-color-palette:before, .ion-md-color-wand:before, .ion-md-compass:before, .ion-md-construct:before, .ion-md-contact:before, .ion-md-contacts:before, .ion-md-contract:before, .ion-md-contrast:before, .ion-md-copy:before, .ion-md-create:before, .ion-md-crop:before, .ion-md-cube:before, .ion-md-cut:before, .ion-md-desktop:before, .ion-md-disc:before, .ion-md-document:before, .ion-md-done-all:before, .ion-md-download:before, .ion-md-easel:before, .ion-md-egg:before, .ion-md-exit:before, .ion-md-expand:before, .ion-md-eye:before, .ion-md-eye-off:before, .ion-md-fastforward:before, .ion-md-female:before, .ion-md-filing:before, .ion-md-film:before, .ion-md-finger-print:before, .ion-md-fitness:before, .ion-md-flag:before, .ion-md-flame:before, .ion-md-flash:before, .ion-md-flash-off:before, .ion-md-flashlight:before, .ion-md-flask:before, .ion-md-flower:before, .ion-md-folder:before, .ion-md-folder-open:before, .ion-md-football:before, .ion-md-funnel:before, .ion-md-gift:before, .ion-md-git-branch:before, .ion-md-git-commit:before, .ion-md-git-compare:before, .ion-md-git-merge:before, .ion-md-git-network:before, .ion-md-git-pull-request:before, .ion-md-glasses:before, .ion-md-globe:before, .ion-md-grid:before, .ion-md-hammer:before, .ion-md-hand:before, .ion-md-happy:before, .ion-md-headset:before, .ion-md-heart:before, .ion-md-heart-dislike:before, .ion-md-heart-empty:before, .ion-md-heart-half:before, .ion-md-help:before, .ion-md-help-buoy:before, .ion-md-help-circle:before, .ion-md-help-circle-outline:before, .ion-md-home:before, .ion-md-hourglass:before, .ion-md-ice-cream:before, .ion-md-image:before, .ion-md-images:before, .ion-md-infinite:before, .ion-md-information:before, .ion-md-information-circle:before, .ion-md-information-circle-outline:before, .ion-md-jet:before, .ion-md-journal:before, .ion-md-key:before, .ion-md-keypad:before, .ion-md-laptop:before, .ion-md-leaf:before, .ion-md-link:before, .ion-md-list:before, .ion-md-list-box:before, .ion-md-locate:before, .ion-md-lock:before, .ion-md-log-in:before, .ion-md-log-out:before, .ion-md-magnet:before, .ion-md-mail:before, .ion-md-mail-open:before, .ion-md-mail-unread:before, .ion-md-male:before, .ion-md-man:before, .ion-md-map:before, .ion-md-medal:before, .ion-md-medical:before, .ion-md-medkit:before, .ion-md-megaphone:before, .ion-md-menu:before, .ion-md-mic:before, .ion-md-mic-off:before, .ion-md-microphone:before, .ion-md-moon:before, .ion-md-more:before, .ion-md-move:before, .ion-md-musical-note:before, .ion-md-musical-notes:before, .ion-md-navigate:before, .ion-md-notifications:before, .ion-md-notifications-off:before, .ion-md-notifications-outline:before, .ion-md-nuclear:before, .ion-md-nutrition:before, .ion-md-open:before, .ion-md-options:before, .ion-md-outlet:before, .ion-md-paper:before, .ion-md-paper-plane:before, .ion-md-partly-sunny:before, .ion-md-pause:before, .ion-md-paw:before, .ion-md-people:before, .ion-md-person:before, .ion-md-person-add:before, .ion-md-phone-landscape:before, .ion-md-phone-portrait:before, .ion-md-photos:before, .ion-md-pie:before, .ion-md-pin:before, .ion-md-pint:before, .ion-md-pizza:before, .ion-md-planet:before, .ion-md-play:before, .ion-md-play-circle:before, .ion-md-podium:before, .ion-md-power:before, .ion-md-pricetag:before, .ion-md-pricetags:before, .ion-md-print:before, .ion-md-pulse:before, .ion-md-qr-scanner:before, .ion-md-quote:before, .ion-md-radio:before, .ion-md-radio-button-off:before, .ion-md-radio-button-on:before, .ion-md-rainy:before, .ion-md-recording:before, .ion-md-redo:before, .ion-md-refresh:before, .ion-md-refresh-circle:before, .ion-md-remove:before, .ion-md-remove-circle:before, .ion-md-remove-circle-outline:before, .ion-md-reorder:before, .ion-md-repeat:before, .ion-md-resize:before, .ion-md-restaurant:before, .ion-md-return-left:before, .ion-md-return-right:before, .ion-md-reverse-camera:before, .ion-md-rewind:before, .ion-md-ribbon:before, .ion-md-rocket:before, .ion-md-rose:before, .ion-md-sad:before, .ion-md-save:before, .ion-md-school:before, .ion-md-search:before, .ion-md-send:before, .ion-md-settings:before, .ion-md-share:before, .ion-md-share-alt:before, .ion-md-shirt:before, .ion-md-shuffle:before, .ion-md-skip-backward:before, .ion-md-skip-forward:before, .ion-md-snow:before, .ion-md-speedometer:before, .ion-md-square:before, .ion-md-square-outline:before, .ion-md-star:before, .ion-md-star-half:before, .ion-md-star-outline:before, .ion-md-stats:before, .ion-md-stopwatch:before, .ion-md-subway:before, .ion-md-sunny:before, .ion-md-swap:before, .ion-md-switch:before, .ion-md-sync:before, .ion-md-tablet-landscape:before, .ion-md-tablet-portrait:before, .ion-md-tennisball:before, .ion-md-text:before, .ion-md-thermometer:before, .ion-md-thumbs-down:before, .ion-md-thumbs-up:before, .ion-md-thunderstorm:before, .ion-md-time:before, .ion-md-timer:before, .ion-md-today:before, .ion-md-train:before, .ion-md-transgender:before, .ion-md-trash:before, .ion-md-trending-down:before, .ion-md-trending-up:before, .ion-md-trophy:before, .ion-md-tv:before, .ion-md-umbrella:before, .ion-md-undo:before, .ion-md-unlock:before, .ion-md-videocam:before, .ion-md-volume-high:before, .ion-md-volume-low:before, .ion-md-volume-mute:before, .ion-md-volume-off:before, .ion-md-walk:before, .ion-md-wallet:before, .ion-md-warning:before, .ion-md-watch:before, .ion-md-water:before, .ion-md-wifi:before, .ion-md-wine:before, .ion-md-woman:before
*/

import React from "react";
import Svg, { Path, G } from "react-native-svg";

export function AddIcon() {
  return (
    <Svg width={24} height={33} viewBox="0 0 24 33" fill="none">
      <G fill="#CECECE">
        <Path d="M12 0C5.372 0 0 5.372 0 12a11.96 11.96 0 001.52 5.852L9.402 31.5C9.98 32.5 10.99 33 12 33c1.01 0 2.02-.5 2.598-1.5l7.88-13.65a11.929 11.929 0 001.516-5.526c.002-.108.004-.216.004-.326C24 5.372 18.628 0 12 0zm8.922 13.204A8.968 8.968 0 0112 20.998a8.968 8.968 0 01-8.922-7.794A9.004 9.004 0 0112 3a9.004 9.004 0 018.922 10.204z" />
        <Path d="M16 10.5h-2.5V8a1.5 1.5 0 00-3 0v2.5H8a1.5 1.5 0 000 3h2.5V16a1.5 1.5 0 003 0v-2.5H16a1.5 1.5 0 000-3z" />
      </G>
    </Svg>
  );
}

export function BackIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.555 5.711c.986 0 1.914.38 2.612 1.067a3.59 3.59 0 011.082 2.576 3.6 3.6 0 01-1.082 2.576l-6.519 6.427a.92.92 0 01-.649.264.924.924 0 01-.649-.264l-6.519-6.43A3.59 3.59 0 013.75 9.353a3.6 3.6 0 011.082-2.576 3.691 3.691 0 012.61-1.066c.987 0 1.915.38 2.613 1.066l1.62 1.598c.18.177.47.177.65 0l1.62-1.598a3.702 3.702 0 012.61-1.065zm0-2.711a6.47 6.47 0 00-4.556 1.86A6.471 6.471 0 007.443 3c-1.65 0-3.298.62-4.555 1.86a6.29 6.29 0 000 8.985l6.519 6.428a3.679 3.679 0 002.592 1.06c.939 0 1.877-.353 2.592-1.06l6.521-6.428a6.29 6.29 0 000-8.985A6.475 6.475 0 0016.555 3z"
        fill="#CECECE"
      />
    </Svg>
  );
}

export function CheckIcon({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.7 20c-.4 0-.8-.2-1-.5l-5.3-6.7c-.5-.6-.4-1.4.2-1.9.6-.5 1.4-.4 1.9.2l3.9 4.9c.1.1.3.1.4 0l6.8-11.3c.4-.6 1.2-.8 1.8-.5.6.4.8 1.2.4 1.8l-8 13.3c-.2.4-.6.7-1.1.7z"
        fill={color}
      />
    </Svg>
  );
}

export function CloseIcon({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.217 12.317a.448.448 0 010-.634l5.387-5.387a1.345 1.345 0 10-1.902-1.902l-5.387 5.389a.448.448 0 01-.634 0L6.294 4.396a1.343 1.343 0 10-1.9 1.9l5.387 5.387a.448.448 0 010 .634l-5.387 5.387a1.345 1.345 0 101.902 1.902l5.387-5.387a.448.448 0 01.634 0l5.387 5.387a1.345 1.345 0 001.902-1.902l-5.389-5.387z"
        fill={color}
      />
    </Svg>
  );
}

export function HomeIcon({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.697 10.291a4.158 4.158 0 00-.917-1.384l-5.59-5.586A4.495 4.495 0 0012 2c-.595 0-1.177.115-1.727.343a4.477 4.477 0 00-1.463.978L3.22 8.905a4.114 4.114 0 00-.917 1.386A4.24 4.24 0 002 11.883v.11a4.144 4.144 0 001.388 3.105.83.83 0 01.277.62v2.95A3.328 3.328 0 005.7 21.737c.413.176.85.264 1.298.264h10a3.33 3.33 0 003.333-3.331v-2.951c0-.237.1-.462.277-.62a4.144 4.144 0 001.388-3.105v-.11a4.166 4.166 0 00-.3-1.592zM19.5 11.993c0 .725-.463 1.341-1.11 1.571a.833.833 0 00-.557.786v4.32c0 .46-.373.833-.833.833h-2.083a.833.833 0 01-.834-.832v-2.882c0-1.15-.925-2.1-2.076-2.105a2.083 2.083 0 00-2.09 2.082v2.905c0 .46-.374.832-.834.832H7a.833.833 0 01-.833-.832v-4.323a.835.835 0 00-.557-.786 1.664 1.664 0 01-1.11-1.569v-.143c0-.441.175-.866.488-1.177l5.59-5.587a2.012 2.012 0 012.845.002l5.59 5.586c.314.313.489.736.489 1.178v.141H19.5z"
        fill={color}
      />
    </Svg>
  );
}

export function LikeIcon({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.555 5.711c.986 0 1.914.38 2.612 1.067a3.59 3.59 0 011.082 2.576 3.6 3.6 0 01-1.082 2.576l-6.519 6.427a.92.92 0 01-.649.264.924.924 0 01-.649-.264l-6.519-6.43A3.59 3.59 0 013.75 9.353a3.6 3.6 0 011.082-2.576 3.691 3.691 0 012.61-1.066c.987 0 1.915.38 2.613 1.066l1.62 1.598c.18.177.47.177.65 0l1.62-1.598a3.702 3.702 0 012.61-1.065zm0-2.711a6.47 6.47 0 00-4.556 1.86A6.471 6.471 0 007.443 3c-1.65 0-3.298.62-4.555 1.86a6.29 6.29 0 000 8.985l6.519 6.428a3.679 3.679 0 002.592 1.06c.939 0 1.877-.353 2.592-1.06l6.521-6.428a6.29 6.29 0 000-8.985A6.475 6.475 0 0016.555 3z"
        fill={color}
      />
    </Svg>
  );
}

export function LocationIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 4C8.7 4 6 6.6 6 9.8v.2c0 1 .3 1.9.8 2.7l.1.1 3.9 6.5c.2.5.7.7 1.2.7s1-.2 1.3-.7l3.9-6.5.1-.1c.5-.8.7-1.7.8-2.7v-.2C18 6.6 15.3 4 12 4zm4.5 5.9c0 .4-.1.7-.2 1.1-.1.3-.2.6-.4.9l-.1.1-3.8 6.5L8.1 12l-.1-.1c-.2-.3-.3-.6-.4-.9-.1-.3-.2-.7-.2-1.1v-.1c0-.6.1-1.2.4-1.7.2-.5.6-1 1-1.4.4-.4.9-.7 1.4-.9.6-.2 1.1-.3 1.8-.3.6 0 1.2.1 1.8.3.5.2 1 .5 1.4.9.4.4.7.9 1 1.4.2.5.4 1.1.4 1.7l-.1.1zm-2-.1c0 1.3-1.1 2.4-2.5 2.4s-2.5-1.1-2.5-2.4 1.1-2.4 2.5-2.4 2.5 1.1 2.5 2.4z"
        fill="#cecece"
      />
    </Svg>
  );
}

export function LogoIcon() {
  return (
    <Svg width={33} height={44} viewBox="0 0 24 32" fill="none">
      <Path
        d="M23.282 11.59v.3c-.1 1.9-.6 3.798-1.499 5.396l-.2.3-7.494 12.99c-1.1 1.899-3.897 1.899-4.996 0L6.195 25.58c-.3-.4-.4-.9-.4-1.499v-5.296c0-.2.3-.4.5-.2 1.799 1.4 3.997 2.099 6.495 1.8a8.694 8.694 0 007.494-7.495c.7-5.396-3.497-9.892-8.693-9.892-4.796 0-8.693 3.997-8.693 8.793v6.994c0 .3-.4.4-.5.1l-.7-1.299c-.1-.1-.1-.2-.2-.3C.6 15.688.1 13.89 0 11.992v-.3C0 5.196 5.196 0 11.59 0c6.496 0 11.692 5.196 11.692 11.59zm-17.487.1a5.723 5.723 0 015.896-5.895 5.896 5.896 0 015.695 5.696 5.724 5.724 0 01-5.895 5.895c-3.098 0-5.596-2.498-5.696-5.695zm2.898-.199c-.1 1.699 1.3 3.098 3.098 3.098a3.009 3.009 0 002.798-2.798c.1-1.699-1.3-3.098-3.098-3.098a3.009 3.009 0 00-2.798 2.798z"
        fill="#33D17C"
      />
    </Svg>
  );
}

export function LogoType() {
  return (
    <Svg width={41} height={24} viewBox="0 0 41 24" fill="none">
      <Path
        d="M38.5 1.295v15.037c0 2.788-2.2 4.98-5 4.98s-5-2.291-5-4.98V1.295H26v12.448c-1.1-2.789-3.8-4.78-7-4.78-1.6 0-3.1.498-4.4 1.394.3-.896.5-1.793.5-2.789C15.1 3.386 11.7 0 7.6 0S0 3.386 0 7.568v15.137h2.5v-9.56c1.3 1.195 3.1 1.892 5 1.892 1.6 0 3.1-.498 4.4-1.394-.3.896-.5 1.793-.5 2.788 0 4.183 3.4 7.569 7.5 7.569 3.5 0 6.5-2.39 7.3-5.676.9 3.186 3.8 5.576 7.3 5.576 4.2 0 7.5-3.385 7.5-7.568V1.295h-2.5zm-31 11.253c-2.8 0-5-2.29-5-4.98 0-2.688 2.2-4.979 5-4.979s5 2.29 5 4.98c0 2.688-2.2 4.979-5 4.979zm11.4 8.863c-2.8 0-5-2.29-5-4.98 0-2.788 2.2-4.979 5-4.979s5 2.29 5 4.98c0 2.688-2.2 4.979-5 4.979z"
        fill="#CECECE"
      />
    </Svg>
  );
}

export function UserIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.213 16.857a9.952 9.952 0 00-2.143-3.179 9.991 9.991 0 00-1.553-1.27 6.626 6.626 0 001.148-3.742 6.665 6.665 0 00-1.953-4.713A6.646 6.646 0 0012 2a6.664 6.664 0 00-4.713 1.953 6.645 6.645 0 00-1.954 4.714 6.625 6.625 0 001.149 3.741A9.993 9.993 0 002 20.75c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25a9.94 9.94 0 00-.787-3.893zM12 4.5a4.166 4.166 0 110 8.333A4.166 4.166 0 1112 4.5zm-3.688 9.722A6.638 6.638 0 0012 15.334a6.624 6.624 0 003.687-1.112 7.527 7.527 0 013.601 4.765.417.417 0 01-.405.515H5.115a.416.416 0 01-.405-.515 7.523 7.523 0 013.602-4.765z"
        fill="#CECECE"
      />
    </Svg>
  );
}

export function NotificationIcon({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.137 14.47l-1.607-1.607a2.944 2.944 0 01-.863-2.083V8.667a6.667 6.667 0 00-13.334 0v2.113c0 .782-.31 1.53-.863 2.083L2.863 14.47a2.945 2.945 0 002.083 5.03H9.5a2.5 2.5 0 005 0h4.553a2.947 2.947 0 002.084-5.03zM19.053 17H4.947a.447.447 0 01-.317-.762l1.607-1.606a5.41 5.41 0 001.596-3.852V8.667a4.14 4.14 0 011.22-2.947A4.14 4.14 0 0112 4.5a4.14 4.14 0 012.947 1.22 4.14 4.14 0 011.22 2.947v2.113c0 1.455.566 2.822 1.595 3.852l1.606 1.606c.085.085.13.197.13.315a.444.444 0 01-.445.447z"
        fill={color}
      />
    </Svg>
  );
}

export function OptionsIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 6a2 2 0 114 0 2 2 0 01-4 0zM10 12a2 2 0 114 0 2 2 0 01-4 0zM10 18a2 2 0 114 0 2 2 0 01-4 0z"
        fill="#CECECE"
      />
    </Svg>
  );
}

export function SearchIcon({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.633 19.867l-5.305-5.307a7.917 7.917 0 10-1.767 1.768l5.306 5.305a1.247 1.247 0 001.766 0 1.248 1.248 0 000-1.766zm-6.725-7.842a5.411 5.411 0 01-1.161 1.723 5.385 5.385 0 01-3.832 1.587 5.39 5.39 0 01-3.832-1.587 5.384 5.384 0 01-1.586-3.831 5.39 5.39 0 011.586-3.832 5.412 5.412 0 017.664 0 5.384 5.384 0 011.586 3.832 5.39 5.39 0 01-.425 2.108z"
        fill={color}
      />
    </Svg>
  );
}

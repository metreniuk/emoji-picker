import React, { ComponentType } from "react";
import classNames from "classnames";

const Search = ({ className }: IconProps) => (
  <svg
    className={classNames(className)}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M11 6.75C11 9.09721 9.09721 11 6.75 11C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5C9.09721 2.5 11 4.40279 11 6.75ZM10.251 11.3117C9.28141 12.0569 8.06745 12.5 6.75 12.5C3.57436 12.5 1 9.92564 1 6.75C1 3.57436 3.57436 1 6.75 1C9.92564 1 12.5 3.57436 12.5 6.75C12.5 8.06745 12.0569 9.28141 11.3117 10.251L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2374 14.8232 13.7626 14.8232 13.4697 14.5303L10.251 11.3117Z"
    />
  </svg>
);

const Close = ({ className }: IconProps) => (
  <svg
    className={classNames(className)}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L8 6.93934L11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967C13.3232 3.26256 13.3232 3.73744 13.0303 4.03033L9.06066 8L13.0303 11.9697C13.3232 12.2626 13.3232 12.7374 13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L8 9.06066L4.03033 13.0303C3.73744 13.3232 3.26256 13.3232 2.96967 13.0303C2.67678 12.7374 2.67678 12.2626 2.96967 11.9697L6.93934 8L2.96967 4.03033C2.67678 3.73744 2.67678 3.26256 2.96967 2.96967Z"
    />
  </svg>
);

const Recent = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM12.5 7C12.5 6.44772 12.0523 6 11.5 6C10.9477 6 10.5 6.44772 10.5 7V12.5C10.5 12.7919 10.6276 13.0693 10.8492 13.2593L14.3492 16.2593C14.7685 16.6187 15.3998 16.5701 15.7593 16.1508C16.1187 15.7315 16.0701 15.1002 15.6508 14.7407L12.5 12.0401V7Z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.5 6C12.0523 6 12.5 6.44772 12.5 7V12.0401L15.6508 14.7407C16.0701 15.1002 16.1187 15.7315 15.7593 16.1508C15.3998 16.5701 14.7685 16.6187 14.3492 16.2593L10.8492 13.2593C10.6276 13.0693 10.5 12.7919 10.5 12.5V7C10.5 6.44772 10.9477 6 11.5 6Z"
      />
    )}
  </svg>
);

const Smile = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM9.10041 13.9739C8.81146 13.5067 8.19909 13.3598 7.72939 13.6462C7.25785 13.9338 7.10868 14.5491 7.3962 15.0206L7.39717 15.0222L7.39826 15.024L7.4008 15.0281L7.40735 15.0386L7.42636 15.0683C7.44165 15.0918 7.46225 15.1227 7.48815 15.1598C7.5399 15.2341 7.61327 15.3341 7.70845 15.4512C7.89798 15.6843 8.17889 15.9912 8.55342 16.2983C9.30401 16.9138 10.4582 17.55 12 17.55C13.5418 17.55 14.696 16.9138 15.4466 16.2983C15.8211 15.9912 16.102 15.6843 16.2915 15.4512C16.3867 15.3341 16.4601 15.2341 16.5118 15.1598C16.5378 15.1227 16.5583 15.0918 16.5736 15.0683L16.5926 15.0386L16.5992 15.0281L16.6017 15.024L16.6028 15.0222L16.6038 15.0206C16.8913 14.5491 16.7421 13.9338 16.2706 13.6462C15.8009 13.3598 15.1886 13.5067 14.8996 13.9739L14.899 13.9749L14.8978 13.9768L14.8971 13.978C14.8928 13.9845 14.8841 13.9975 14.871 14.0164C14.8446 14.0542 14.8008 14.1144 14.7397 14.1895C14.6167 14.3408 14.4289 14.5464 14.1784 14.7518C13.679 15.1613 12.9582 15.55 12 15.55C11.0418 15.55 10.321 15.1613 9.82158 14.7518C9.5711 14.5464 9.38327 14.3408 9.2603 14.1895C9.19923 14.1144 9.15541 14.0542 9.12903 14.0164C9.11588 13.9975 9.10717 13.9843 9.10294 13.9778L9.10041 13.9739ZM16.5 9.5C16.5 10.3284 15.8284 11 15 11C14.1716 11 13.5 10.3284 13.5 9.5C13.5 8.67157 14.1716 8 15 8C15.8284 8 16.5 8.67157 16.5 9.5ZM9 11C9.82843 11 10.5 10.3284 10.5 9.5C10.5 8.67157 9.82843 8 9 8C8.17157 8 7.5 8.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11Z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.72939 13.6462C8.19909 13.3598 8.81146 13.5067 9.10041 13.9739L9.10294 13.9778C9.10717 13.9843 9.11588 13.9975 9.12903 14.0164C9.15541 14.0542 9.19923 14.1144 9.2603 14.1895C9.38327 14.3408 9.5711 14.5464 9.82158 14.7518C10.321 15.1613 11.0418 15.55 12 15.55C12.9582 15.55 13.679 15.1613 14.1784 14.7518C14.4289 14.5464 14.6167 14.3408 14.7397 14.1895C14.8008 14.1144 14.8446 14.0542 14.871 14.0164C14.8841 13.9975 14.8928 13.9845 14.8971 13.978L14.8978 13.9768L14.899 13.9749L14.8996 13.9739C15.1886 13.5067 15.8009 13.3598 16.2706 13.6462C16.7421 13.9338 16.8913 14.5491 16.6038 15.0206L16.6028 15.0222L16.6017 15.024L16.5992 15.0281L16.5926 15.0386L16.5736 15.0683C16.5583 15.0918 16.5378 15.1227 16.5118 15.1598C16.4601 15.2341 16.3867 15.3341 16.2915 15.4512C16.102 15.6843 15.8211 15.9912 15.4466 16.2983C14.696 16.9138 13.5418 17.55 12 17.55C10.4582 17.55 9.30401 16.9138 8.55342 16.2983C8.17889 15.9912 7.89798 15.6843 7.70845 15.4512C7.61327 15.3341 7.5399 15.2341 7.48815 15.1598C7.46225 15.1227 7.44165 15.0918 7.42636 15.0683L7.40735 15.0386L7.4008 15.0281L7.39826 15.024L7.39717 15.0222L7.3962 15.0206C7.10868 14.5491 7.25785 13.9338 7.72939 13.6462ZM16.5 9.5C16.5 10.3284 15.8284 11 15 11C14.1716 11 13.5 10.3284 13.5 9.5C13.5 8.67157 14.1716 8 15 8C15.8284 8 16.5 8.67157 16.5 9.5ZM9 11C9.82843 11 10.5 10.3284 10.5 9.5C10.5 8.67157 9.82843 8 9 8C8.17157 8 7.5 8.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11Z"
      />
    )}
  </svg>
);

const Animal = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.70893 3.74364C9.43497 3.4586 9.07093 3.10086 8.65079 2.74074C8.18262 2.33945 7.62398 1.91717 7.02573 1.59085C6.43855 1.27058 5.7361 1 5 1C4.10246 1 3.50654 1.53083 3.17188 2.12672C2.86193 2.67861 2.72785 3.34915 2.66555 3.93794C2.55068 5.02361 2.6481 6.18571 2.71168 6.75697C2.25211 7.50031 1.25 9.41323 1.25 12C1.25 18.0523 5.94772 22.75 12 22.75C18.0523 22.75 22.75 18.0523 22.75 12C22.75 9.41323 21.7479 7.50031 21.2883 6.75696C21.3519 6.18571 21.4493 5.02361 21.3344 3.93794C21.2722 3.34915 21.1381 2.67861 20.8281 2.12672C20.4935 1.53083 19.8975 1 19 1C18.2639 1 17.5614 1.27058 16.9743 1.59085C16.376 1.91717 15.8174 2.33945 15.3492 2.74074C14.9291 3.10086 14.565 3.4586 14.2911 3.74364C12.8428 3.08545 11.1572 3.08545 9.70893 3.74364ZM11.118 15.0227C10.5819 14.65 10 14.0591 10 13.25C10 12.75 10.5 12.25 11 12.25C11.75 12.25 12 13 12 13C12 13 12.25 12.25 13 12.25C13.5 12.25 14 12.75 14 13.25C14 14.0591 13.4181 14.65 12.882 15.0227L12.8928 15.0385C12.9247 15.085 12.9748 15.1544 13.0409 15.2355C13.1771 15.4027 13.3611 15.5946 13.5735 15.7433C13.7857 15.8918 13.9838 15.968 14.1648 15.9781C14.3256 15.987 14.5663 15.9503 14.9 15.7C15.3418 15.3686 15.9686 15.4582 16.3 15.9C16.6314 16.3418 16.5418 16.9686 16.1 17.3C15.4337 17.7997 14.7369 18.013 14.0539 17.975C13.3912 17.9382 12.8393 17.6707 12.4265 17.3817C12.2703 17.2723 12.1279 17.1557 12 17.0392C11.8721 17.1557 11.7297 17.2723 11.5735 17.3817C11.1607 17.6707 10.6088 17.9382 9.94609 17.975C9.26309 18.013 8.56631 17.7997 7.9 17.3C7.45817 16.9686 7.36863 16.3418 7.7 15.9C8.03137 15.4582 8.65817 15.3686 9.1 15.7C9.43369 15.9503 9.6744 15.987 9.83515 15.9781C10.0162 15.968 10.2143 15.8918 10.4265 15.7433C10.6389 15.5946 10.8229 15.4027 10.9591 15.2355C11.0252 15.1544 11.0753 15.085 11.1072 15.0385L11.118 15.0227ZM16 11.125C15.8235 11.125 15.7272 11.1871 15.7071 11.2071C15.3166 11.5976 14.6834 11.5977 14.2929 11.2071C13.9024 10.8166 13.9024 10.1835 14.2929 9.79293C14.7728 9.31294 15.4265 9.125 16 9.125C16.5735 9.125 17.2272 9.31293 17.7071 9.79293C18.0976 10.1835 18.0976 10.8166 17.7071 11.2071C17.3166 11.5977 16.6834 11.5976 16.2929 11.2071C16.2728 11.1871 16.1765 11.125 16 11.125ZM7.70712 11.2071C7.72715 11.1871 7.8235 11.125 8 11.125C8.17651 11.125 8.27285 11.1871 8.29287 11.2071C8.68339 11.5976 9.31655 11.5977 9.70709 11.2071C10.0976 10.8166 10.0976 10.1835 9.70713 9.79293C9.22715 9.31293 8.57349 9.125 8 9.125C7.4265 9.125 6.77285 9.31294 6.29288 9.79293C5.90236 10.1835 5.90238 10.8166 6.29291 11.2071C6.68344 11.5977 7.31661 11.5976 7.70712 11.2071Z"
      />
    ) : (
      <>
        <path d="M8 11.125C7.8235 11.125 7.72715 11.1871 7.70712 11.2071C7.31661 11.5976 6.68344 11.5977 6.29291 11.2071C5.90238 10.8166 5.90236 10.1835 6.29288 9.79293C6.77285 9.31294 7.4265 9.125 8 9.125C8.57349 9.125 9.22715 9.31293 9.70713 9.79293C10.0976 10.1835 10.0976 10.8166 9.70709 11.2071C9.31655 11.5977 8.68339 11.5976 8.29287 11.2071C8.27285 11.1871 8.17651 11.125 8 11.125Z" />
        <path d="M15.7071 11.2071C15.7272 11.1871 15.8235 11.125 16 11.125C16.1765 11.125 16.2728 11.1871 16.2929 11.2071C16.6834 11.5976 17.3166 11.5977 17.7071 11.2071C18.0976 10.8166 18.0976 10.1835 17.7071 9.79293C17.2272 9.31293 16.5735 9.125 16 9.125C15.4265 9.125 14.7728 9.31294 14.2929 9.79293C13.9024 10.1835 13.9024 10.8166 14.2929 11.2071C14.6834 11.5977 15.3166 11.5976 15.7071 11.2071Z" />
        <path d="M10 13.25C10 14.0591 10.5819 14.65 11.118 15.0227L11.1072 15.0385C11.0753 15.085 11.0252 15.1544 10.9591 15.2355C10.8229 15.4027 10.6389 15.5946 10.4265 15.7433C10.2143 15.8918 10.0162 15.968 9.83515 15.9781C9.6744 15.987 9.43369 15.9503 9.1 15.7C8.65817 15.3686 8.03137 15.4582 7.7 15.9C7.36863 16.3418 7.45817 16.9686 7.9 17.3C8.56631 17.7997 9.26309 18.013 9.94609 17.975C10.6088 17.9382 11.1607 17.6707 11.5735 17.3817C11.7297 17.2724 11.8721 17.1557 12 17.0392C12.1279 17.1557 12.2703 17.2724 12.4265 17.3817C12.8393 17.6707 13.3912 17.9382 14.0539 17.975C14.7369 18.013 15.4337 17.7997 16.1 17.3C16.5418 16.9686 16.6314 16.3418 16.3 15.9C15.9686 15.4582 15.3418 15.3686 14.9 15.7C14.5663 15.9503 14.3256 15.987 14.1648 15.9781C13.9838 15.968 13.7857 15.8918 13.5735 15.7433C13.3611 15.5946 13.1771 15.4027 13.0409 15.2355C12.9748 15.1544 12.9247 15.085 12.8928 15.0385L12.882 15.0227C13.4181 14.65 14 14.0591 14 13.25C14 12.75 13.5 12.25 13 12.25C12.25 12.25 12 13 12 13C12 13 11.75 12.25 11 12.25C10.5 12.25 10 12.75 10 13.25Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.65079 2.74074C9.07093 3.10086 9.43497 3.4586 9.70893 3.74364C11.1572 3.08545 12.8428 3.08545 14.2911 3.74364C14.565 3.4586 14.9291 3.10086 15.3492 2.74074C15.8174 2.33945 16.376 1.91717 16.9743 1.59085C17.5614 1.27058 18.2639 1 19 1C19.8975 1 20.4935 1.53083 20.8281 2.12672C21.1381 2.67861 21.2721 3.34915 21.3344 3.93794C21.4493 5.02361 21.3519 6.18571 21.2883 6.75697C21.7479 7.50031 22.75 9.41323 22.75 12C22.75 18.0523 18.0523 22.75 12 22.75C5.94772 22.75 1.25 18.0523 1.25 12C1.25 9.41323 2.25211 7.50031 2.71168 6.75697C2.6481 6.18571 2.55068 5.02361 2.66555 3.93794C2.72785 3.34915 2.86193 2.67861 3.17188 2.12672C3.50654 1.53083 4.10246 1 5 1C5.7361 1 6.43855 1.27058 7.02573 1.59085C7.62398 1.91717 8.18262 2.33945 8.65079 2.74074ZM4.71532 6.6723C4.65972 6.21687 4.55257 5.1113 4.65445 4.14838C4.70648 3.65666 4.80362 3.30563 4.91569 3.10606C4.95226 3.04095 4.97986 3.01121 4.99175 3.00013L5 3C5.2639 3 5.62395 3.10442 6.06802 3.34665C6.50102 3.58283 6.94238 3.91055 7.34921 4.25926C7.7528 4.60519 8.10201 4.95412 8.35111 5.21787C8.47505 5.34911 8.57272 5.45767 8.63831 5.53212C8.67108 5.56932 8.69574 5.59789 8.71158 5.6164L8.7286 5.63642L8.73224 5.64074C9.05948 6.03286 9.62968 6.11539 10.0547 5.83205C11.2188 5.05598 12.7812 5.05598 13.9453 5.83205C14.3704 6.11547 14.941 6.03256 15.2682 5.64018L15.2714 5.63642L15.2884 5.6164C15.3043 5.59789 15.3289 5.56932 15.3617 5.53212C15.4273 5.45767 15.5249 5.34911 15.6489 5.21787C15.898 4.95412 16.2472 4.60519 16.6508 4.25926C17.0576 3.91055 17.499 3.58283 17.932 3.34665C18.3761 3.10442 18.7361 3 19 3L19.0083 3.00013C19.0201 3.01121 19.0477 3.04095 19.0843 3.10606C19.1964 3.30563 19.2935 3.65666 19.3455 4.14838C19.4474 5.1113 19.3403 6.21687 19.2847 6.6723C19.2384 7.05131 19.3351 7.41805 19.5285 7.71591C19.8274 8.1764 20.75 9.78394 20.75 12C20.75 16.9477 16.9477 20.75 12 20.75C7.05228 20.75 3.25 16.9477 3.25 12C3.25 9.78394 4.17259 8.1764 4.47155 7.71591C4.66493 7.41805 4.7616 7.05131 4.71532 6.6723ZM4.99175 3.00013L4.98527 3.00048C4.98527 3.00048 4.99148 2.99919 4.99818 2.99464C4.99818 2.99464 4.99594 2.99623 4.99175 3.00013Z"
        />
      </>
    )}
  </svg>
);

const Food = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <>
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7929 0.292895C11.1834 -0.0976302 11.8166 -0.0976319 12.2071 0.292891C13.2497 1.33543 13.3815 2.68253 13.3104 3.62894C13.3129 3.62783 13.3154 3.62671 13.3179 3.6256C13.3467 3.61276 13.3762 3.59963 13.4064 3.58619C14.0249 3.31131 14.7985 3 16 3C17.7111 3 19.4983 3.57113 20.7896 4.93838C22.0958 6.32148 22.7668 8.38274 22.4951 11.0995C22.2278 13.7722 21.1689 16.5361 19.9224 18.6355C19.2981 19.6869 18.6047 20.6093 17.9043 21.2832C17.2491 21.9134 16.4093 22.5 15.5 22.5C14.2763 22.5 13.605 22.176 13.0664 21.8682C13.0363 21.851 13.0075 21.8345 12.9798 21.8186C12.5979 21.5992 12.4253 21.5 12 21.5C11.5748 21.5 11.4022 21.5992 11.0203 21.8186C10.9926 21.8345 10.9638 21.851 10.9337 21.8682C10.3951 22.176 9.72381 22.5 8.50003 22.5C7.59076 22.5 6.75094 21.9134 6.09581 21.2832C5.39537 20.6093 4.70195 19.6869 4.07768 18.6355C2.83117 16.5361 1.77227 13.7722 1.50499 11.0995C1.23331 8.38274 1.90425 6.32148 3.21052 4.93838C4.50181 3.57113 6.28895 3 8.00004 3C9.2016 3 9.9752 3.31131 10.5937 3.58619C10.6239 3.59963 10.6534 3.61276 10.6822 3.6256C10.9094 3.72682 11.0943 3.80918 11.2678 3.87061C11.2882 3.75005 11.3051 3.62065 11.3155 3.4858C11.3676 2.80772 11.2466 2.1608 10.7929 1.70711C10.4024 1.31659 10.4024 0.68342 10.7929 0.292895Z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </>
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7929 0.292895C11.1834 -0.0976302 11.8166 -0.0976319 12.2071 0.292891C13.2497 1.33543 13.3815 2.68253 13.3104 3.62894C13.3129 3.62783 13.3154 3.62671 13.3179 3.6256C13.3467 3.61276 13.3762 3.59963 13.4064 3.58619C14.0249 3.31131 14.7985 3 16 3C17.7111 3 19.4983 3.57113 20.7896 4.93838C22.0958 6.32148 22.7668 8.38274 22.4951 11.0995C22.2278 13.7722 21.1689 16.5361 19.9224 18.6355C19.2981 19.6869 18.6047 20.6093 17.9043 21.2832C17.2491 21.9134 16.4093 22.5 15.5 22.5C14.2763 22.5 13.605 22.176 13.0664 21.8682C13.0363 21.851 13.0075 21.8345 12.9798 21.8186C12.5979 21.5992 12.4253 21.5 12 21.5C11.5748 21.5 11.4022 21.5992 11.0203 21.8186C10.9926 21.8345 10.9638 21.851 10.9337 21.8682C10.3951 22.176 9.72381 22.5 8.50003 22.5C7.59076 22.5 6.75094 21.9134 6.09581 21.2832C5.39537 20.6093 4.70195 19.6869 4.07768 18.6355C2.83117 16.5361 1.77227 13.7722 1.50499 11.0995C1.23331 8.38274 1.90425 6.32148 3.21052 4.93838C4.50181 3.57113 6.28895 3 8.00004 3C9.2016 3 9.9752 3.31131 10.5937 3.58619C10.6239 3.59963 10.6534 3.61276 10.6822 3.6256C10.9094 3.72682 11.0943 3.80918 11.2678 3.87061C11.2882 3.75005 11.3051 3.62065 11.3155 3.4858C11.3676 2.80772 11.2466 2.1608 10.7929 1.70711C10.4024 1.31659 10.4024 0.68342 10.7929 0.292895ZM4.66454 6.31163C3.8458 7.17852 3.26674 8.61726 3.49507 10.9005C3.72781 13.2278 4.66891 15.7139 5.79739 17.6145C6.36062 18.5631 6.94845 19.3282 7.48239 19.8418C8.06163 20.3991 8.40931 20.5 8.50003 20.5C9.27626 20.5 9.60497 20.324 9.9414 20.1318C9.97237 20.1141 10.0041 20.0956 10.0368 20.0767C10.4582 19.8323 11.0313 19.5 12 19.5C12.9688 19.5 13.5419 19.8323 13.9633 20.0767C13.9959 20.0956 14.0277 20.1141 14.0587 20.1318C14.3951 20.324 14.7238 20.5 15.5 20.5C15.5908 20.5 15.9384 20.3991 16.5177 19.8418C17.0516 19.3282 17.6395 18.5631 18.2027 17.6145C19.3312 15.7139 20.2723 13.2278 20.505 10.9005C20.7333 8.61726 20.1543 7.17852 19.3355 6.31162C18.5018 5.42887 17.289 5 16 5C15.2016 5 14.7252 5.18869 14.2187 5.41381C14.1766 5.4325 14.1335 5.45192 14.0893 5.47185C13.578 5.70235 12.9178 6 12 6C11.0823 6 10.422 5.70235 9.91075 5.47185C9.86654 5.45193 9.82345 5.4325 9.7814 5.41381C9.27488 5.18869 8.79848 5 8.00004 5C6.71113 5 5.49826 5.42887 4.66454 6.31163Z"
      />
    )}
  </svg>
);

const Sport = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7018 10.9756C19.2582 10.7013 17.0303 9.86618 15.5821 8.4179C14.1338 6.96961 13.2987 4.74177 13.0244 1.29818C18.1437 1.78215 22.2178 5.85622 22.7018 10.9756ZM22.7057 12.9818C18.9702 12.7048 16.1294 11.7937 14.1679 9.83211C12.2063 7.87056 11.2951 5.02981 11.0182 1.29424C5.8646 1.76082 1.76077 5.86464 1.29419 11.0182C5.02976 11.2952 7.87052 12.2063 9.83207 14.1679C11.7936 16.1294 12.7048 18.9702 12.9817 22.7058C18.1353 22.2392 22.2391 18.1354 22.7057 12.9818ZM1.29814 13.0244C1.7821 18.1438 5.85617 22.2179 10.9755 22.7018C10.7012 19.2582 9.86614 17.0304 8.41785 15.5821C6.96957 14.1338 4.74173 13.2987 1.29814 13.0244Z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM3.28249 11.2408C3.66729 6.76376 7.4233 3.25 12 3.25C16.4172 3.25 20.0699 6.52312 20.6651 10.7763C20.6626 10.7584 20.66 10.7405 20.6574 10.7226C18.3421 10.3166 16.721 9.55689 15.5821 8.41794C14.4432 7.279 13.6834 5.65795 13.2775 3.34264C12.8605 3.28165 12.4339 3.25 12 3.25C11.7442 3.25 11.491 3.26104 11.2407 3.28255C11.6697 6.05441 12.5705 8.2348 14.1679 9.83216C15.7652 11.4295 17.9456 12.3303 20.7175 12.7593C20.3542 16.986 16.986 20.3542 12.7593 20.7175C12.3303 17.9457 11.4295 15.7653 9.83211 14.1679C8.23475 12.5706 6.05436 11.6697 3.28249 11.2408ZM10.7225 20.6574C10.3166 18.3421 9.55684 16.7211 8.4179 15.5821C7.27895 14.4432 5.65789 13.6835 3.34259 13.2775C3.89992 17.0874 6.91257 20.1001 10.7225 20.6574Z"
      />
    )}
  </svg>
);

const Transport = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <>
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.91947 2C7.35927 2 5.94145 2.90717 5.28763 4.32377L3.52437 8.14417L1.44719 7.10557C0.95321 6.85858 0.352537 7.05881 0.105548 7.55279C-0.141442 8.04676 0.0587828 8.64744 0.552761 8.89443L2.01066 9.62338C1.07135 10.4875 0.587739 11.7644 0.750089 13.0632L1.49997 19.0623V21C1.49997 21.5523 1.94769 22 2.49997 22H6.49997C6.95884 22 7.35883 21.6877 7.47012 21.2425L7.78075 20H16.2192L16.5298 21.2425C16.6411 21.6877 17.0411 22 17.5 22H21.5C22.0523 22 22.5 21.5523 22.5 21V19.0623L23.2499 13.0632C23.4122 11.7644 22.9286 10.4875 21.9893 9.62338L23.4472 8.89443C23.9412 8.64744 24.1414 8.04676 23.8944 7.55279C23.6474 7.05881 23.0467 6.85858 22.5528 7.10557L20.4756 8.14417L18.7123 4.32377C18.0585 2.90717 16.6407 2 15.0805 2H8.91947ZM18.4371 8.5H5.56288L7.10355 5.16189C7.43046 4.45358 8.13937 4 8.91947 4H15.0805C15.8606 4 16.5695 4.45358 16.8964 5.16188L18.4371 8.5ZM5.66437 12.5136C5.1196 12.4228 4.60437 12.7908 4.51358 13.3356C4.42278 13.8803 4.7908 14.3956 5.33557 14.4864L8.33557 14.9864C8.88034 15.0772 9.39557 14.7091 9.48637 14.1644C9.57716 13.6196 9.20914 13.1044 8.66437 13.0136L5.66437 12.5136ZM18.6644 14.4864C19.2091 14.3956 19.5772 13.8803 19.4864 13.3356C19.3956 12.7908 18.8803 12.4228 18.3356 12.5136L15.3356 13.0136C14.7908 13.1044 14.4228 13.6196 14.5136 14.1644C14.6044 14.7091 15.1196 15.0772 15.6644 14.9864L18.6644 14.4864Z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </>
    ) : (
      <>
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.28763 4.32377C5.94145 2.90717 7.35927 2 8.91947 2H15.0805C16.6407 2 18.0585 2.90717 18.7123 4.32377L20.4756 8.14417L22.5528 7.10557C23.0467 6.85858 23.6474 7.05881 23.8944 7.55279C24.1414 8.04676 23.9412 8.64744 23.4472 8.89443L21.9893 9.62338C22.9286 10.4875 23.4122 11.7644 23.2499 13.0632L22.5 19.0623V21C22.5 21.5523 22.0523 22 21.5 22H17.5C17.0411 22 16.6411 21.6877 16.5298 21.2425L16.2192 20H7.78075L7.47012 21.2425C7.35883 21.6877 6.95884 22 6.49997 22H2.49997C1.94769 22 1.49997 21.5523 1.49997 21V19.0623L0.750089 13.0632C0.587739 11.7644 1.07135 10.4875 2.01066 9.62338L0.552761 8.89443C0.0587828 8.64744 -0.141442 8.04676 0.105548 7.55279C0.352537 7.05881 0.95321 6.85858 1.44719 7.10557L3.52437 8.14417L5.28763 4.32377ZM5.56288 8.5H18.4371L16.8964 5.16188C16.5695 4.45358 15.8606 4 15.0805 4H8.91947C8.13937 4 7.43046 4.45358 7.10355 5.16189L5.56288 8.5ZM19.723 10.5H4.27696L3.69021 10.852C3.01112 11.2595 2.63642 12.0293 2.73465 12.8151L3.49225 18.876C3.4974 18.9171 3.49997 18.9585 3.49997 19V20H5.7192L6.02983 18.7575C6.14112 18.3123 6.54111 18 6.99997 18H17C17.4588 18 17.8588 18.3123 17.9701 18.7575L18.2808 20H20.5V19C20.5 18.9585 20.5026 18.9171 20.5077 18.876L21.2653 12.8151C21.3635 12.0293 20.9888 11.2595 20.3097 10.852L19.723 10.5ZM4.51358 13.3356C4.60438 12.7908 5.1196 12.4228 5.66437 12.5136L8.66437 13.0136C9.20914 13.1044 9.57716 13.6196 9.48637 14.1644C9.39557 14.7092 8.88035 15.0772 8.33558 14.9864L5.33558 14.4864C4.79081 14.3956 4.42279 13.8804 4.51358 13.3356ZM19.4864 13.3356C19.5772 13.8804 19.2091 14.3956 18.6644 14.4864L15.6644 14.9864C15.1196 15.0772 14.6044 14.7092 14.5136 14.1644C14.4228 13.6196 14.7908 13.1044 15.3356 13.0136L18.3356 12.5136C18.8803 12.4228 19.3956 12.7908 19.4864 13.3356Z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </>
    )}
  </svg>
);

const Objects = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.5C7.34772 0.5 3.5 4.34772 3.5 9C3.5 11.4244 4.70318 13.0344 5.75629 14.206C5.97122 14.4451 6.1647 14.6509 6.34132 14.8388L6.34137 14.8388C6.62861 15.1444 6.87127 15.4025 7.08913 15.6793C7.42279 16.1033 7.5 16.3427 7.5 16.5V21C7.5 22.3807 8.61929 23.5 10 23.5H14C15.3807 23.5 16.5 22.3807 16.5 21V16.5C16.5 16.3427 16.5772 16.1033 16.9109 15.6793C17.1287 15.4025 17.3714 15.1444 17.6586 14.8388L17.6586 14.8388C17.8353 14.6509 18.0288 14.4451 18.2437 14.206C19.2968 13.0344 20.5 11.4244 20.5 9C20.5 4.34771 16.6523 0.5 12 0.5ZM9.5 21V19.5H14.5V21C14.5 21.2761 14.2761 21.5 14 21.5H10C9.72386 21.5 9.5 21.2761 9.5 21ZM10 9C9.44772 9 9 9.44771 9 10C9 10.5523 9.44772 11 10 11C10.325 11 10.5023 11.0784 10.6016 11.1446C10.7071 11.2149 10.7899 11.3158 10.8556 11.4472C10.9232 11.5825 10.962 11.7299 10.9824 11.8519C10.9921 11.9105 10.9966 11.9572 10.9986 11.9853C10.9991 11.992 10.9994 11.9976 10.9997 12.0018C10.9998 12.0049 10.9999 12.0073 11 12.009V14.5C11 15.0523 11.4477 15.5 12 15.5C12.5523 15.5 13 15.0523 13 14.5V12.009C13.0002 12.005 13.0005 11.997 13.0014 11.9853C13.0034 11.9572 13.0079 11.9105 13.0176 11.8519C13.038 11.7299 13.0768 11.5825 13.1444 11.4472C13.2101 11.3158 13.2929 11.2149 13.3984 11.1446C13.4977 11.0784 13.675 11 14 11C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9C13.325 9 12.7523 9.17162 12.2891 9.48045C12.1843 9.55031 12.0881 9.62513 12 9.70341C11.9119 9.62513 11.8157 9.55031 11.711 9.48045C11.2477 9.17162 10.675 9 10 9Z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 9C3.5 4.34772 7.34772 0.5 12 0.5C16.6523 0.5 20.5 4.34771 20.5 9C20.5 11.4244 19.2968 13.0344 18.2437 14.206C18.0288 14.4451 17.8353 14.6509 17.6586 14.8388C17.3714 15.1444 17.1287 15.4025 16.9109 15.6793C16.5772 16.1033 16.5 16.3427 16.5 16.5V21C16.5 22.3807 15.3807 23.5 14 23.5H10C8.61929 23.5 7.5 22.3807 7.5 21V16.5C7.5 16.3427 7.42279 16.1033 7.08913 15.6793C6.87127 15.4025 6.62861 15.1444 6.34137 14.8388C6.16473 14.6509 5.97124 14.4451 5.75629 14.206C4.70318 13.0344 3.5 11.4244 3.5 9ZM12 2.5C8.45228 2.5 5.5 5.45229 5.5 9C5.5 10.6756 6.29682 11.8156 7.24371 12.869C7.38733 13.0288 7.54703 13.1993 7.71088 13.3742C8.04389 13.7297 8.394 14.1034 8.66087 14.4425C9.07721 14.9717 9.5 15.6573 9.5 16.5V17.5H14.5V16.5C14.5 15.6573 14.9228 14.9717 15.3391 14.4425C15.606 14.1034 15.9561 13.7297 16.2891 13.3742C16.453 13.1993 16.6127 13.0288 16.7563 12.869C17.7032 11.8156 18.5 10.6756 18.5 9C18.5 5.45228 15.5477 2.5 12 2.5ZM14.5 19.5H9.5V21C9.5 21.2761 9.72386 21.5 10 21.5H14C14.2761 21.5 14.5 21.2761 14.5 21V19.5ZM9 10C9 9.44772 9.44772 9 10 9C10.675 9 11.2477 9.17162 11.711 9.48045C11.8157 9.55031 11.9119 9.62513 12 9.70341C12.0881 9.62513 12.1843 9.55031 12.289 9.48045C12.7523 9.17162 13.325 9 14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11C13.675 11 13.4977 11.0784 13.3984 11.1446C13.2929 11.2149 13.2101 11.3158 13.1444 11.4472C13.0768 11.5825 13.038 11.7299 13.0176 11.8519C13.0079 11.9105 13.0034 11.9572 13.0014 11.9853C13.0005 11.997 13.0002 12.005 13 12.009V14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5V12.009C10.9998 12.005 10.9995 11.997 10.9986 11.9853C10.9966 11.9572 10.9921 11.9105 10.9824 11.8519C10.962 11.7299 10.9232 11.5825 10.8556 11.4472C10.7899 11.3158 10.7071 11.2149 10.6015 11.1446C10.5023 11.0784 10.325 11 10 11C9.44772 11 9 10.5523 9 10Z"
      />
    )}
  </svg>
);

const Flags = ({ className, isFilled }: IconProps) => (
  <svg
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFilled ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31623 1.55132L5.32186 1.55318L5.3442 1.5605C5.3645 1.56712 5.39543 1.57713 5.43602 1.59004C5.51722 1.61588 5.63691 1.65329 5.78735 1.69842C6.0887 1.78883 6.51089 1.90945 6.99254 2.02986C7.97843 2.27633 9.12913 2.5 10 2.5C10.8216 2.5 11.4342 2.30118 12.1838 2.05132L12.2137 2.04133C12.9578 1.79324 13.8373 1.5 15 1.5C16.1291 1.5 17.4784 1.77633 18.4925 2.02986C19.0109 2.15945 19.4637 2.28883 19.7873 2.38592C19.9494 2.43454 20.0797 2.47526 20.1704 2.50411C20.2157 2.51853 20.2512 2.53001 20.2758 2.53804L20.3045 2.54744L20.3125 2.55009L20.316 2.55124C20.7243 2.68736 21 3.06957 21 3.5V15.5C21 15.8214 20.8455 16.1233 20.5847 16.3112C20.3239 16.4992 19.9887 16.5503 19.6838 16.4487L19.6781 16.4468L19.6558 16.4395C19.6355 16.4329 19.6046 16.4229 19.564 16.41C19.4828 16.3841 19.3631 16.3467 19.2127 16.3016C18.9113 16.2112 18.4891 16.0906 18.0075 15.9701C17.0216 15.7237 15.8709 15.5 15 15.5C14.1784 15.5 13.5658 15.6988 12.8162 15.9487L12.7863 15.9587C12.0422 16.2068 11.1627 16.5 10 16.5C8.87088 16.5 7.52157 16.2237 6.50746 15.9701C6.32975 15.9257 6.15974 15.8813 6 15.8382V22C6 22.5523 5.55228 23 5 23C4.44772 23 4 22.5523 4 22V2.5C4 2.17856 4.15452 1.87671 4.41529 1.68876C4.67601 1.50084 5.01133 1.44975 5.31623 1.55132Z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31623 1.55132C5.31628 1.55133 5.31618 1.5513 5.31623 1.55132L5.32186 1.55318L5.3442 1.5605C5.3645 1.56712 5.39543 1.57713 5.43602 1.59004C5.51722 1.61588 5.63691 1.65329 5.78735 1.69842C6.0887 1.78883 6.51089 1.90945 6.99254 2.02986C7.97843 2.27633 9.12913 2.5 10 2.5C10.8216 2.5 11.4342 2.30118 12.1838 2.05132L12.2137 2.04133C12.9578 1.79324 13.8373 1.5 15 1.5C16.1291 1.5 17.4784 1.77633 18.4925 2.02986C19.0109 2.15945 19.4637 2.28883 19.7873 2.38592C19.9494 2.43454 20.0797 2.47526 20.1704 2.50411C20.2157 2.51853 20.2512 2.53001 20.2758 2.53804L20.3045 2.54744L20.3125 2.55009L20.316 2.55124C20.3161 2.55128 20.3162 2.55132 20 3.5L20.316 2.55124C20.7243 2.68736 21 3.06957 21 3.5V15.5C21 15.8214 20.8455 16.1233 20.5847 16.3112C20.3239 16.4992 19.9887 16.5503 19.6838 16.4487L19.6781 16.4468L19.6558 16.4395C19.6355 16.4329 19.6046 16.4229 19.564 16.41C19.4828 16.3841 19.3631 16.3467 19.2127 16.3016C18.9113 16.2112 18.4891 16.0906 18.0075 15.9701C17.0216 15.7237 15.8709 15.5 15 15.5C14.1784 15.5 13.5658 15.6988 12.8162 15.9487L12.7863 15.9587C12.0422 16.2068 11.1627 16.5 10 16.5C8.87088 16.5 7.52157 16.2237 6.50746 15.9701C6.32975 15.9257 6.15974 15.8813 6 15.8382V22C6 22.5523 5.55228 23 5 23C4.44772 23 4 22.5523 4 22V2.5C4 2.17856 4.15452 1.87671 4.41529 1.68876C4.67601 1.50084 5.01133 1.44975 5.31623 1.55132ZM6 13.7612C6.27475 13.8412 6.61542 13.9356 6.99254 14.0299C7.97843 14.2763 9.12913 14.5 10 14.5C10.8216 14.5 11.4342 14.3012 12.1838 14.0513L12.2137 14.0413C12.9578 13.7932 13.8373 13.5 15 13.5C16.1291 13.5 17.4784 13.7763 18.4925 14.0299C18.6702 14.0743 18.8403 14.1187 19 14.1618V4.23876C18.7252 4.15883 18.3846 4.06442 18.0075 3.97014C17.0216 3.72367 15.8709 3.5 15 3.5C14.1784 3.5 13.5658 3.69882 12.8162 3.94868L12.7863 3.95867C12.0422 4.20676 11.1627 4.5 10 4.5C8.87088 4.5 7.52157 4.22367 6.50746 3.97014C6.32975 3.92571 6.15974 3.88131 6 3.83822V13.7612Z"
      />
    )}
  </svg>
);

interface IconProps {
  className?: string;
  isFilled?: boolean;
}

export type IconType = ComponentType<IconProps>;

export {
  Search,
  Close,
  Recent,
  Smile,
  Animal,
  Food,
  Sport,
  Transport,
  Objects,
  Flags,
};

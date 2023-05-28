import * as React from 'react';
import { SVGProps } from 'react';

export const ShowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M23.8852 11.5716C22.2743 8.77505 19.7284 6.63622 16.6955 5.53143C13.6626 4.42654 10.3375 4.42654 7.3045 5.53143C4.27178 6.63617 1.72585 8.775 0.114804 11.5716C-0.0382678 11.8367 -0.0382678 12.1634 0.114804 12.4286C1.7259 15.2251 4.27163 17.3639 7.3045 18.4687C10.3374 19.5736 13.6625 19.5736 16.6955 18.4687C19.7282 17.3639 22.2741 15.2251 23.8852 12.4286C23.9604 12.2983 24 12.1504 24 12.0001C24 11.8497 23.9604 11.7018 23.8852 11.5716ZM12.0044 17.5706C9.98274 17.5654 7.99472 17.0527 6.22296 16.0794C4.45121 15.1061 2.95223 13.7033 1.86388 12.0001C3.31289 9.71084 5.49434 7.97926 8.05336 7.08725C10.6119 6.19523 13.3974 6.19523 15.9562 7.08725C18.515 7.97926 20.6965 9.71084 22.1457 12.0001C21.0574 13.7033 19.5584 15.1061 17.7866 16.0794C16.0148 17.0527 14.0268 17.5654 12.0052 17.5706H12.0044ZM12.0044 8.57206C11.095 8.57206 10.2229 8.93322 9.57995 9.57617C8.93686 10.2189 8.57561 11.0909 8.57561 12.0001C8.57561 12.9093 8.93686 13.7812 9.57995 14.4239C10.2229 15.0669 11.095 15.4281 12.0044 15.4281C12.9138 15.4281 13.786 15.0669 14.4289 14.4239C15.072 13.7812 15.4332 12.9093 15.4332 12.0001C15.4332 11.0909 15.072 10.2189 14.4289 9.57617C13.786 8.93322 12.9138 8.57206 12.0044 8.57206ZM12.0044 13.7141C11.5498 13.7141 11.1137 13.5335 10.7921 13.2121C10.4706 12.8905 10.29 12.4546 10.29 12.0001C10.29 11.5456 10.4706 11.1096 10.7921 10.788C11.1137 10.4666 11.5498 10.2861 12.0044 10.2861C12.459 10.2861 12.8951 10.4666 13.2167 10.788C13.5382 11.1096 13.7188 11.5456 13.7188 12.0001C13.7188 12.4546 13.5382 12.8906 13.2167 13.2121C12.8951 13.5335 12.459 13.7141 12.0044 13.7141Z' />
    </svg>
  );
};

export const HideIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M18.7428 6.45579L23.7489 1.44548C23.9373 1.22525 24.0014 0.924667 23.9192 0.646767C23.8372 0.368892 23.62 0.151502 23.3424 0.0694711C23.0647 -0.0127848 22.7644 0.0513407 22.5443 0.2399L17.111 5.6777C14.0611 4.45666 10.6741 4.37576 7.56938 5.44964C4.46474 6.52352 1.85052 8.68051 0.204919 11.526C0.0523672 11.7905 0.0523672 12.1165 0.204919 12.381C1.43202 14.4977 3.20142 16.2481 5.33065 17.4509L0.332818 22.4612C0.152046 22.6162 0.0441125 22.8397 0.0349594 23.0776C0.0256154 23.3156 0.116195 23.5467 0.284382 23.7153C0.45276 23.8836 0.683687 23.9743 0.921487 23.9651C1.15928 23.9557 1.38257 23.8477 1.5374 23.6668L6.97068 18.229C8.58333 18.8811 10.3058 19.2178 12.0452 19.2208C14.4435 19.2136 16.7981 18.5785 18.8751 17.3786C20.9523 16.1787 22.6795 14.4558 23.8856 12.381C23.9605 12.251 24 12.1035 24 11.9535C24 11.8035 23.9605 11.656 23.8856 11.526C22.654 9.40701 20.8783 7.65655 18.7428 6.45608L18.7428 6.45579ZM1.93916 11.9532C3.02381 10.2539 4.51765 8.85438 6.28344 7.88334C8.04923 6.91231 10.0305 6.40082 12.0452 6.39569C13.317 6.39646 14.5803 6.60142 15.7869 7.00279L13.7538 9.02064C13.2373 8.71013 12.6478 8.54199 12.0452 8.53321C11.1389 8.53321 10.2697 8.89353 9.62903 9.53498C8.98812 10.1762 8.62809 11.0461 8.62809 11.9532C8.63687 12.5563 8.80486 13.1462 9.11512 13.6632L6.60336 16.2282C4.69571 15.2448 3.08535 13.7689 1.93909 11.9532L1.93916 11.9532ZM13.7537 11.9532C13.7537 12.4066 13.5737 12.8416 13.2534 13.1624C12.9328 13.483 12.4982 13.6632 12.0452 13.6632C11.8976 13.6594 11.7511 13.6363 11.6094 13.5949L13.6938 11.5087V11.5085C13.7333 11.6536 13.7533 11.803 13.7537 11.9532L13.7537 11.9532ZM10.3366 11.9532C10.3366 11.4997 10.5166 11.0648 10.8369 10.744C11.1575 10.4234 11.5921 10.2432 12.0452 10.2432C12.1927 10.247 12.3392 10.2701 12.4809 10.3115L10.3965 12.3977V12.3979C10.357 12.2528 10.337 12.1034 10.3366 11.9532L10.3366 11.9532ZM12.0452 17.5107C10.7734 17.5099 9.51011 17.305 8.30346 16.9036L10.3366 14.8857C10.8531 15.1963 11.4426 15.3644 12.0452 15.3732C12.9515 15.3732 13.8207 15.0129 14.4614 14.3714C15.1023 13.7302 15.4623 12.8603 15.4623 11.9532C15.4535 11.3501 15.2855 10.7602 14.9753 10.2432L17.487 7.67817C19.3947 8.66162 21.005 10.1374 22.1513 11.9532C21.0667 13.6525 19.5728 15.052 17.807 16.023C16.0412 16.9941 14.06 17.5055 12.0452 17.5107L12.0452 17.5107Z' />
    </svg>
  );
};
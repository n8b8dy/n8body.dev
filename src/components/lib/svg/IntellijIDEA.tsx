import type { SVGProps } from '@/components/lib/svg/base'

export const IntellijIDEASVG = (props: SVGProps) => {
  return (
    <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient id="intellij_a" x1="0%" x2="99.799%" y1="50%" y2="50%">
          <stop offset="26%" stopColor="#F97A12" />
          <stop offset="46%" stopColor="#B07B58" />
          <stop offset="72%" stopColor="#577BAE" />
          <stop offset="91%" stopColor="#1E7CE5" />
          <stop offset="100%" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient id="intellij_b" x1=".345%" x2="121.182%" y1="34.54%" y2="77.619%">
          <stop offset="0%" stopColor="#F97A12" />
          <stop offset="7%" stopColor="#CB7A3E" />
          <stop offset="15%" stopColor="#9E7B6A" />
          <stop offset="24%" stopColor="#757B91" />
          <stop offset="33%" stopColor="#537BB1" />
          <stop offset="43%" stopColor="#387CCC" />
          <stop offset="54%" stopColor="#237CE0" />
          <stop offset="66%" stopColor="#147CEF" />
          <stop offset="79%" stopColor="#0B7CF7" />
          <stop offset="100%" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient id="intellij_c" x1="78.169%" x2="30.106%" y1="97.749%" y2="-6.624%">
          <stop offset="0%" stopColor="#FE315D" />
          <stop offset="8%" stopColor="#CB417E" />
          <stop offset="16%" stopColor="#9E4E9B" />
          <stop offset="25%" stopColor="#755BB4" />
          <stop offset="34%" stopColor="#5365CA" />
          <stop offset="44%" stopColor="#386DDB" />
          <stop offset="54%" stopColor="#2374E9" />
          <stop offset="66%" stopColor="#1478F3" />
          <stop offset="79%" stopColor="#0B7BF8" />
          <stop offset="100%" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient id="intellij_d" x1="20%" x2="103.422%" y1="24.087%" y2="132.676%">
          <stop offset="0%" stopColor="#FE315D" />
          <stop offset="4%" stopColor="#F63462" />
          <stop offset="10%" stopColor="#DF3A71" />
          <stop offset="17%" stopColor="#C24383" />
          <stop offset="29%" stopColor="#AD4A91" />
          <stop offset="55%" stopColor="#755BB4" />
          <stop offset="92%" stopColor="#1D76ED" />
          <stop offset="100%" stopColor="#087CFA" />
        </linearGradient>
      </defs>
      <path fill="url(#intellij_a)" d="m64.8 199.6-62-48.8 30.8-57.2L122 128z" />
      <path
        fill="url(#intellij_b)"
        d="m256 68.4-4.8 148-98.4 39.6-59.2-38.4L180 128l-37.6-83.2 34-40.8z"
      />
      <path fill="url(#intellij_c)" d="m256 68.4-78 92-35.6-115.6 34-40.8z" />
      <path
        fill="url(#intellij_d)"
        d="M123.2 212.4 20.8 249.6 37.2 192l21.2-71.2L0 101.2 37.2 0l80 9.6 79.2 90.4z"
      />
      <path d="M48 48h160v160H48z" />
      <path
        fill="#FFF"
        d="M63.2 178h60v10h-60v-10ZM106 80.8v-12H73.2v12h9.2v42h-9.2v12.4H106v-12.4h-9.2v-42h9.2Zm32 55.2a26.84 26.84 0 0 1-13.2-2.8 31.48 31.48 0 0 1-8.8-7.2l9.2-10.4a29.88 29.88 0 0 0 5.6 4.8 11.72 11.72 0 0 0 6.4 1.6 7.44 7.44 0 0 0 6.4-2.8 11.72 11.72 0 0 0 2.4-8.4V68h14.8v43.2a27.08 27.08 0 0 1-1.6 10.4 20 20 0 0 1-5.6 8.8A28.6 28.6 0 0 1 138 136Z"
      />
    </svg>
  )
}

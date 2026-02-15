import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function PresentationsHero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10])
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10])

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px - 0.5)
    my.set(py - 0.5)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  const stackVariants = {
    rest: { rotate: 0, x: 0, y: 0 },
    hover: { rotate: -10, x: 22, y: 14 },
  } as const

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-6">
      <div className="relative w-[920px] max-w-[96vw]">
        <div className="rounded-[28px] bg-[#5b3a2f] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <div className="text-white/90 text-[32px] font-semibold tracking-tight">Presentations</div>
          <div className="mt-2 text-white/55 text-[18px]">Browse Figma Slides for your next pitch</div>

          <div
            className="relative mt-10 h-[360px] w-full flex items-center justify-center"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <motion.div
              className="absolute w-[620px] h-[300px] rounded-[22px] bg-white/95"
              style={{ filter: 'drop-shadow(0 22px 26px rgba(0,0,0,.45))' }}
              initial={{ rotate: 2, y: 18, x: 10 }}
              animate={{ y: [18, 14, 18] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-[620px] h-[300px] rounded-[22px] bg-white/85"
              style={{ filter: 'drop-shadow(0 18px 22px rgba(0,0,0,.35))' }}
              initial={{ rotate: -1, y: 32, x: -6 }}
              animate={{ y: [32, 36, 32] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative w-[660px] h-[320px] rounded-[24px] bg-[#f7df1e] overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
                filter: 'drop-shadow(0 26px 28px rgba(0,0,0,.55))',
              }}
              variants={stackVariants}
              initial="rest"
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="absolute inset-0 p-10">
                <Pill className="absolute left-8 top-8">MONTH XX YEAR</Pill>
                <Pill className="absolute right-8 bottom-8">CONFIDENTIAL</Pill>

                <div className="mt-16 text-[88px] leading-[0.95] font-[500] tracking-tight text-black">Startup Pitch</div>

                <div className="mt-8 flex justify-start">
                  <Pill className="!text-black/70 !bg-white/80">TAGLINE</Pill>
                </div>
              </div>

              <motion.div
                className="absolute -inset-[60px]"
                style={{
                  background:
                    'radial-gradient(600px 220px at 30% 20%, rgba(255,255,255,.55), transparent 60%)',
                  transform: 'translateZ(30px)',
                }}
                animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute -inset-3 rounded-[34px] border border-white/10" />
      </div>
    </div>
  )
}

function Pill({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={
        'px-4 py-2 rounded-full bg-white/85 text-black/70 text-[12px] font-medium ' +
        'shadow-[inset_0_0_0_1px_rgba(0,0,0,.15)] ' +
        className
      }
    >
      {children}
    </div>
  )
}

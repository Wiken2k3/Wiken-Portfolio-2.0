// Đơn giản 1 container giới hạn chiều ngang
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {children}
    </div>
  )
}

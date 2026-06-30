import { useState } from "react";

const SIDEBAR_ITEMS = [
  { id: "dashboard", icon: "⊞", label: "لوحة التحكم" },
  { id: "students", icon: "🎓", label: "الطلاب" },
  { id: "courses", icon: "📚", label: "المقررات" },
  { id: "faculty", icon: "👨‍🏫", label: "أعضاء الهيئة" },
  { id: "grades", icon: "📊", label: "الدرجات" },
  { id: "schedule", icon: "📅", label: "الجداول" },
  { id: "reports", icon: "📋", label: "التقارير" },
  { id: "settings", icon: "⚙️", label: "الإعدادات" },
];

const STATS = [
  {
    label: "إجمالي الطلاب",
    value: "12,480",
    delta: "+3.2%",
    color: "#F5C518",
    icon: "🎓",
  },
  {
    label: "المقررات النشطة",
    value: "348",
    delta: "+12",
    color: "#4ade80",
    icon: "📚",
  },
  {
    label: "أعضاء الهيئة",
    value: "284",
    delta: "+5",
    color: "#60a5fa",
    icon: "👨‍🏫",
  },
  {
    label: "معدل الحضور",
    value: "87%",
    delta: "+1.4%",
    color: "#f472b6",
    icon: "✅",
  },
];

const RECENT_STUDENTS = [
  {
    name: "أحمد محمد العمري",
    id: "2024001",
    dept: "هندسة الحاسب",
    gpa: "3.8",
    status: "نشط",
  },
  {
    name: "سارة خالد الزهراني",
    id: "2024002",
    dept: "علوم الحاسب",
    gpa: "3.9",
    status: "نشط",
  },
  {
    name: "عمر عبدالله الشمري",
    id: "2024003",
    dept: "إدارة الأعمال",
    gpa: "3.5",
    status: "موقوف",
  },
  {
    name: "نورة سعد القحطاني",
    id: "2024004",
    dept: "الطب البشري",
    gpa: "3.95",
    status: "نشط",
  },
  {
    name: "فيصل ناصر العتيبي",
    id: "2024005",
    dept: "هندسة المدنية",
    gpa: "3.2",
    status: "نشط",
  },
];

const ALERTS = [
  { type: "warning", msg: "15 طالبًا لم يسجلوا بعد في الفصل الجديد" },
  { type: "info", msg: "موعد رفع الدرجات: 30 يونيو 2026" },
  { type: "error", msg: "3 مقررات تعاني نقصًا في الكوادر التدريسية" },
];

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Cairo', sans-serif",
        display: "flex",
        height: "100vh",
        background: "#0d1b35",
        color: "#e2eaf7",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? 240 : 68,
          background: "linear-gradient(180deg, #0a1628 0%, #0d2050 100%)",
          borderLeft: "1px solid rgba(245,197,24,0.15)",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "24px 16px 20px",
            borderBottom: "1px solid rgba(245,197,24,0.1)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg, #F5C518, #e8a400)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(245,197,24,0.4)",
            }}
          >
            📖
          </div>
          {sidebarOpen && (
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#F5C518",
                  lineHeight: 1.2,
                }}
              >
                بوابة الطالب
              </div>
              <div style={{ fontSize: 10, color: "#7a99cc", marginTop: 2 }}>
                لوحة الإدارة
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: sidebarOpen ? "10px 14px" : "10px",
                justifyContent: sidebarOpen ? "flex-start" : "center",
                background:
                  active === item.id
                    ? "linear-gradient(135deg, rgba(245,197,24,0.18), rgba(245,197,24,0.05))"
                    : "transparent",
                border:
                  active === item.id
                    ? "1px solid rgba(245,197,24,0.25)"
                    : "1px solid transparent",
                borderRadius: 10,
                cursor: "pointer",
                color: active === item.id ? "#F5C518" : "#7a99cc",
                fontSize: 13,
                fontWeight: active === item.id ? 600 : 400,
                marginBottom: 4,
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Admin profile */}
        {sidebarOpen && (
          <div
            style={{
              padding: "16px",
              borderTop: "1px solid rgba(245,197,24,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1e3a7a, #2c5299)",
                border: "2px solid #F5C518",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              👤
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>
                د. سلمان الرشيد
              </div>
              <div style={{ fontSize: 10, color: "#7a99cc" }}>مسؤول النظام</div>
            </div>
          </div>
        )}

        {/* Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: "absolute",
            top: 26,
            left: -14,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#F5C518",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            color: "#0a1628",
            fontWeight: 700,
          }}
        >
          {sidebarOpen ? "›" : "‹"}
        </button>
      </aside>

      {/* Main */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Topbar */}
        <header
          style={{
            padding: "0 28px",
            height: 64,
            background: "rgba(10,22,40,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(245,197,24,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              لوحة التحكم الإدارية
            </div>
            <div style={{ fontSize: 11, color: "#7a99cc" }}>
              الفصل الدراسي الثاني – 1447هـ
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Search */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(245,197,24,0.15)",
                borderRadius: 8,
                padding: "7px 14px",
              }}
            >
              <span style={{ color: "#7a99cc", fontSize: 14 }}>🔍</span>
              <input
                placeholder="بحث..."
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#e2eaf7",
                  fontSize: 13,
                  width: 160,
                  fontFamily: "inherit",
                  direction: "rtl",
                }}
              />
            </div>
            {/* Bell */}
            <button
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(245,197,24,0.15)",
                borderRadius: 8,
                width: 38,
                height: 38,
                cursor: "pointer",
                fontSize: 16,
                color: "#e2eaf7",
              }}
            >
              🔔
              <span
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ef4444",
                }}
              />
            </button>
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Alerts */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 24,
            }}
          >
            {ALERTS.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  borderRadius: 8,
                  background:
                    a.type === "error"
                      ? "rgba(239,68,68,0.1)"
                      : a.type === "warning"
                        ? "rgba(245,197,24,0.1)"
                        : "rgba(96,165,250,0.1)",
                  border: `1px solid ${
                    a.type === "error"
                      ? "rgba(239,68,68,0.3)"
                      : a.type === "warning"
                        ? "rgba(245,197,24,0.3)"
                        : "rgba(96,165,250,0.3)"
                  }`,
                  fontSize: 13,
                }}
              >
                <span>
                  {a.type === "error"
                    ? "⚠️"
                    : a.type === "warning"
                      ? "🔔"
                      : "ℹ️"}
                </span>
                <span>{a.msg}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginBottom: 24,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "20px 20px 16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 80,
                    background: `radial-gradient(circle, ${s.color}22 0%, transparent 70%)`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#7a99cc",
                        marginBottom: 6,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: s.color,
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{ fontSize: 11, color: "#4ade80", marginTop: 6 }}
                    >
                      {s.delta} هذا الشهر
                    </div>
                  </div>
                  <div style={{ fontSize: 28, opacity: 0.7 }}>{s.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 340px",
              gap: 20,
            }}
          >
            {/* Students table */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700 }}>
                  أحدث الطلاب المسجلين
                </div>
                <button
                  style={{
                    fontSize: 12,
                    color: "#F5C518",
                    background: "rgba(245,197,24,0.1)",
                    border: "1px solid rgba(245,197,24,0.25)",
                    borderRadius: 6,
                    padding: "5px 12px",
                    cursor: "pointer",
                  }}
                >
                  عرض الكل
                </button>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                    {[
                      "الاسم",
                      "الرقم الجامعي",
                      "التخصص",
                      "المعدل",
                      "الحالة",
                    ].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "10px 16px",
                          textAlign: "right",
                          fontSize: 11,
                          color: "#7a99cc",
                          fontWeight: 600,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RECENT_STUDENTS.map((s, i) => (
                    <tr
                      key={i}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.04)",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(245,197,24,0.04)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <td style={{ padding: "12px 16px", fontSize: 13 }}>
                        {s.name}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontSize: 12,
                          color: "#7a99cc",
                        }}
                      >
                        {s.id}
                      </td>
                      <td style={{ padding: "12px 16px", fontSize: 12 }}>
                        {s.dept}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#F5C518",
                        }}
                      >
                        {s.gpa}
                      </td>
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          style={{
                            fontSize: 11,
                            padding: "3px 10px",
                            borderRadius: 20,
                            background:
                              s.status === "نشط"
                                ? "rgba(74,222,128,0.12)"
                                : "rgba(239,68,68,0.12)",
                            color: s.status === "نشط" ? "#4ade80" : "#ef4444",
                            border: `1px solid ${s.status === "نشط" ? "rgba(74,222,128,0.3)" : "rgba(239,68,68,0.3)"}`,
                          }}
                        >
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Quick actions */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "16px 20px",
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}
                >
                  إجراءات سريعة
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                  }}
                >
                  {[
                    { label: "إضافة طالب", icon: "➕", color: "#F5C518" },
                    { label: "مقرر جديد", icon: "📚", color: "#60a5fa" },
                    { label: "رفع درجات", icon: "📊", color: "#4ade80" },
                    { label: "إنشاء تقرير", icon: "📋", color: "#f472b6" },
                  ].map((a, i) => (
                    <button
                      key={i}
                      style={{
                        background: `${a.color}12`,
                        border: `1px solid ${a.color}30`,
                        borderRadius: 10,
                        padding: "12px 8px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                        color: a.color,
                        fontSize: 12,
                        fontWeight: 600,
                        transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = `${a.color}22`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = `${a.color}12`)
                      }
                    >
                      <span style={{ fontSize: 20 }}>{a.icon}</span>
                      <span>{a.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dept distribution */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "16px 20px",
                  flex: 1,
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}
                >
                  توزيع التخصصات
                </div>
                {[
                  { name: "هندسة الحاسب", pct: 28, color: "#F5C518" },
                  { name: "الطب البشري", pct: 22, color: "#60a5fa" },
                  { name: "إدارة الأعمال", pct: 18, color: "#4ade80" },
                  { name: "علوم الحاسب", pct: 16, color: "#f472b6" },
                  { name: "الهندسة المدنية", pct: 16, color: "#a78bfa" },
                ].map((d, i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 4,
                        fontSize: 12,
                      }}
                    >
                      <span style={{ color: "#c8d8f0" }}>{d.name}</span>
                      <span style={{ color: d.color, fontWeight: 700 }}>
                        {d.pct}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: 6,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${d.pct}%`,
                          background: `linear-gradient(90deg, ${d.color}99, ${d.color})`,
                          borderRadius: 3,
                          transition: "width 0.8s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

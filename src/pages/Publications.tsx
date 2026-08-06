import { BookOpen, ExternalLink, FileText, Users } from "lucide-react";
import { Section } from "../components/Section";

export default function Publications() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Publications</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Research contributions in public health and biostatistics
        </p>
      </div>

      {/* Featured Publication */}
      <Section
        icon={<BookOpen className="w-6 h-6" />}
        title="Featured Research"
      >
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-3">
                Household Transmission of Severe Acute Respiratory Syndrome
                Coronavirus 2 in the United States: Living Density, Viral Load,
                and Disproportionate Impact on Communities of Color
              </h3>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Clinical Infectious Diseases</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>DOI: 10.1093/cid/ciab701</span>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                This research investigates the patterns of SARS-CoV-2 household
                transmission in the United States, examining the relationship
                between living density, viral load, and transmission rates. The
                study highlights significant disparities in transmission patterns
                across different communities, with particular attention to the
                disproportionate impact on communities of color.
              </p>

              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm mb-2 text-slate-700">Key Findings:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Analysis of household transmission dynamics during the COVID-19 pandemic</li>
                  <li>• Examination of viral load correlation with transmission rates</li>
                  <li>• Statistical evidence of health disparities in affected communities</li>
                  <li>• Implications for public health policy and intervention strategies</li>
                </ul>
              </div>

              <a
                href="https://doi.org/10.1093/cid/ciab701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                View Full Publication <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Interests */}
      <Section
        icon={<FileText className="w-6 h-6" />}
        title="Research Interests"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl mb-3">AI in Healthcare</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Application of machine learning and artificial intelligence to
              clinical data, pharmacovigilance, and personalized medicine for
              improved patient outcomes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3">Biostatistics</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Statistical modeling for clinical trial design and analysis,
              developing rigorous methods to support evidence-based research
              and data-driven decision making.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
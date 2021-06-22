import sinon from "sinon";
import { ReportFactory } from "../../model/ReportFactory";
import { IReportProvider } from "../../providers/IReportProvider";
import { ReportProvider } from "../../providers/ReportProvider";
import { ReportManager } from "../../ReportManager";
import { MissingDataError } from "../../exceptions/MissingDataError";

describe("ReportManager Tests", () => {

  let reportProvider: IReportProvider = sinon.createStubInstance(ReportProvider);
  let sandbox: sinon.SinonSandbox = null;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const report = ReportFactory.createNewReport(null);
    (reportProvider.createReportAsync as any).restore();
    sinon.stub(reportProvider, "createReportAsync").returns(Promise.resolve(report));
    sinon.stub(report, "$dataMissing").returns(true);
  });

  afterEach(function () {
    sandbox.restore(); // Unwraps the spy
    (reportProvider.createReportAsync as any).restore();
    sinon.restore();
  });

  test("ReportManager throws error when datamissing from report", async () => {
    let reportManager = new ReportManager(reportProvider, null, null); 
    expect(reportManager.sendReportAsync(null)).rejects.toThrow(MissingDataError);
  });
});

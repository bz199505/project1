import React, { useEffect, useState } from "react"
import { dummyData } from "./services/apiService"
import { fetchStockData } from "./services/alphaVantageService"
import { Layout, Row, Col, Typography, Divider, Spin } from "antd"
import StockChart from "./components/StockChart"
import KeyRatios from "./components/KeyRatios"
import AnalystEstimates from "./components/AnalystEstimates"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { FinancialData } from "./types/financialData"
import { StockData } from "./types/stockData"

const { Title } = Typography
const { Content } = Layout

const FinancialDashboard: React.FC = () => {
  const [financialData, setFinancialData] = useState<FinancialData | null>(
    dummyData
  )
  const [stockData, setStockData] = useState<StockData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockData = await fetchStockData("AAPL")
        setStockData(stockData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  if (!financialData || stockData.length === 0) {
    return <Spin />
  }

  return (
    <Layout className="App">
      <Content
        className="Content"
        style={{ margin: "0 10%", paddingBottom: "20px" }}
      >
        <Row id="summary">
          <Col span={24}>
            <Title level={2}>Apple Inc. (AAPL)</Title>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={24}>
            <StockChart stockData={stockData} />
          </Col>
        </Row>
        <Divider />
        <Row id="key-ratios" gutter={[16, 16]}>
          <Col span={24}>
            <KeyRatios financialData={financialData} />
          </Col>
        </Row>
        <Divider />
        <Row id="analyst-estimates" gutter={16}>
          <Col span={24}>
            <AnalystEstimates financialData={financialData} />
          </Col>
        </Row>
      </Content>
      <ScrollToTopButton />
    </Layout>
  )
}

export default FinancialDashboard
